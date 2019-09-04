correctname = "John"
namelist = ["John"]
inputname = ""       
while inputname != "John":
    inputname = input("Enter your name: ")
    if inputname == namelist[0]:
        print("Welcome John")
        print("The following names tried and failed to pass")
        print(namelist[1:])
        break
    else:
        namelist.append(inputname)
        print("try again")
