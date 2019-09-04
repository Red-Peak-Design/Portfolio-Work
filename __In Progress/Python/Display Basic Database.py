



f = open('DOB.txt','r+') #Open File
namenum = 0
print("Names:")
for line in f:
    namenum += 1
    fields = line.split()
    print(namenum, fields[0][0] + " " + fields[1])

print(" " )
f = open('DOB.txt','r+') #Open File
birthnum = 0
print("Birth date:")
for line in f:
    birthnum += 1
    fields = line.split()
    print(birthnum, fields[2] + " " + fields[3] + " " + fields[4])
    
    # loop file birthdays
    
# print names numbering them
# print birthdays numbering them

f.close()
