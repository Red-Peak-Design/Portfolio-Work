f = open('RegForm.txt', 'r+') # open file
print("Welcome, this tool will help you to register student for this exam venue")
studentnum = int(input("how many students are attending? "))#capture total student number
#studenttoken = int(0) #student attendance counter
print("Please fill in the attendance form with student ID below")
#while (studenttoken <= studentnum -1): #keep asking for id's till student token equals student total number
for studentid in range(studentnum):      
    studentid = input("Please enter student ID: ")#input id
    #studenttoken += 1 #increase token number for every id entered
    #print(studenttoken)
    f.write(studentid + "\n")
    
print("All students are present")
f.close()

f = open('RegForm.txt', 'r+') # open file
print("Printing out Student ID's:")
contents = " "
for line in f:
    contents = contents + line
f.close()
print(contents)


