
def week_generator():
    loop = 0
    while(loop == 0):
        switch = 0
        while(switch == 0):
            days = ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday')
            Input_User = input("Please enter a day of the week: ")
            def weekdays (weekday):
                index = days.index(weekday)
                return list(days[index:] + days)[:7]
            if Input_User in days:
                print(weekdays(Input_User))
                switch = 1
            else:
                print("This is not a day of the week enter another day")
                

        
 
week_generator()
