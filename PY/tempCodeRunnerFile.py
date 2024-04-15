print("menampilkan objek html")
# print("=======================")
# print(obj)

# print("\nmenampilkan title browser dengan tag title")
# print("=======================")
# print(obj.title)

# print("\nmenampilkan title browser tanpa tag")
# print("=======================")
# print(obj.title.text)

# print('\nmenampilkan semua tag h2')
# print("=======================")
# print(obj.find_all('h2'))

# print('\nmenampilkan semua teks h2')
# print("=======================")
# for headline in obj.find_all('h2'):
#     print(headline.text)

# print('\nmenampilkan headline berdasarkan div class')
# print("=======================")
# print(obj.find_all('div', class_='title'))

# print('\nmenampilkan semua teks headline')   
# print("=======================")
# for headline in obj.find_all('h2', class_=lambda x: x and x.startswith('headline-')):
#     print(headline.text.strip())

# print('\menampilkan semua headline pada file text')
# print("=======================")
# f= open('Headline.txt', 'w')
# for headline in obj.find_all('h2', class_=lambda x: x and x.startswith('headline-')):
#     f.write(headline.text.strip() + '\n')
#     f.write('\n')
# f.close()