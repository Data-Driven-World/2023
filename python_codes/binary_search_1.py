def binary_search(coll, key):
    n = len(coll)
    mid_pos = n // 2
    if coll == []:
        return None
    elif key == coll[mid_pos]:
        return key
    elif key < coll[mid_pos]:
        return binary_search(coll[:mid_pos], key)
    elif key > coll[mid_pos]:
        return binary_search(coll[mid_pos + 1:], key)

found = binary_search([1, 2, 3, 4, 5, 6], 2)
print(found)

found = binary_search([1, 2, 3, 4, 5, 6], 4)
print(found)

found = binary_search([1, 2, 3, 4, 5, 6], 11)
print(found)
