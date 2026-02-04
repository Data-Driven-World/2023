def binary_search(coll, key, start, end):
    n = end - start 
    mid_pos = start + n // 2
    if n == 0:
        return None
    elif key == coll[mid_pos]:
        return key
    elif key < coll[mid_pos]:
        return binary_search(coll, key, start, mid_pos)
    elif key > coll[mid_pos]:
        return binary_search(coll, key, mid_pos + 1, end)

input_coll = [1, 2, 3, 4, 5, 6]
found = binary_search(input_coll, 2, 0, len(input_coll))
print(found)

found = binary_search(input_coll, 4, 0, len(input_coll))
print(found)

input_coll_odd = [1, 2, 3, 4, 5, 6, 7]
found = binary_search(input_coll_odd, 4, 0, len(input_coll_odd))
print(found)

found = binary_search(input_coll_odd, 11, 0, len(input_coll_odd))
print(found)
