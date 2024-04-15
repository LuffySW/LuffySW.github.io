import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime

# URL situs Republika
url = "https://www.republika.co.id/"

# Mengambil halaman web
page = requests.get(url)

# Membuat objek BeautifulSoup   
obj = BeautifulSoup(page.text, "html.parser")

# Menyimpan data dalam list
data = []

# Waktu scraping dijalankan
scraping_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Mencari headline dengan tag h2 dan class yang dimulai dengan 'headline-'
for headline in obj.find_all('h2', class_=lambda x: x and x.startswith('headline-')):
    # Mendapatkan elemen div yang mengandung informasi kategori dan waktu publish
    date_item_div = headline.find_previous_sibling('div', class_='date date-item__headline')
    
    # Mendapatkan kategori dari elemen label di dalam d ate_item_div
    category = date_item_div.find('label', class_='label').text.strip()
    
    # Mendapatkan waktu publish dari date_item_div
    time_publish = date_item_div.text.split('-')[1].strip() if '-' in date_item_div.text else ""
  
    # Tambahkan data ke dalam list
    data.append({
        "kategori": category,
        "judul_headline": headline.text.strip(),
        "waktu_publish": time_publish,
        "waktu_scraping": scraping_time
    })

# Menyimpan data ke dalam file JSON
with open('judul_headline.json', 'w') as f:
    json.dump(data, f, indent=4)

print("Data judul headline telah disimpan dalam file 'judul_headline.json'")
