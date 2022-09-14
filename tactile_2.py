def isPalindrome(n):
    return str(n) == str(n)[::-1]

arr = []
for first_number in range(100,1000):
    for second_number in range(100,1000):
        item = first_number*second_number
        if isPalindrome(item):
            arr.append(item)

print(max(arr))
