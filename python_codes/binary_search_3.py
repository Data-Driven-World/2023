def binary_search(coll, key):
    return binary_search_helper(coll, key, 0, len(coll))

def binary_search_helper(coll, key, start, end):
    n = end - start 
    mid_pos = start + n // 2
    if n == 0:
        return None
    elif key == coll[mid_pos]:
        return key
    elif key < coll[mid_pos]:
        return binary_search_helper(coll, key, start, mid_pos)
    elif key > coll[mid_pos]:
        return binary_search_helper(coll, key, mid_pos + 1, end)

input_coll = [1, 2, 3, 4, 5, 6]
found = binary_search(input_coll, 2)
print(found)

found = binary_search(input_coll, 4)
print(found)

input_coll_odd = [1, 2, 3, 4, 5, 6, 7]
found = binary_search(input_coll_odd, 4)
print(found)

found = binary_search(input_coll_odd, 11)
print(found)
