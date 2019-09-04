menu = ["coffee", "tea", "burger", "pie", "English Breakfast"]
stock = {'coffee': 500,
         'tea': 550,
         'burger': 300,
         'pie': 1,
         'English Breakfast': 500}
price = {"coffee": 30,
         "tea": 15,
         "burger": 90,
         "pie": 39,
         "English Breakfast": 50}

print(menu)
calc = input("Enter Item name to check stock value: ")
total= 0
total = total + (price[calc] * stock[calc])

if calc in menu:
        print ("'",calc,"'", ' was found, calculating total value')
        print ("The total value is : R",total)
else:
        print ('The item ', calc, ' was not found in the list menu')

print(menu[0:3])
