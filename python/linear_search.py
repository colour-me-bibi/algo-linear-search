

def linear_search_global(value_to_find, array_to_search_through):
    """
    This function returns the indices of all occurances of the value_to_find in the array_to_search_through.

    Args:
        value_to_find (int): The value to find in the array_to_search_through.
        array_to_search_through (list): The list to search through.

    Returns:
        list: A list of indices of all occurances of the value_to_find in the array_to_search_through.
    """

    return [i for i, el in enumerate(array_to_search_through) if el == value_to_find]


def linear_search(value_to_find, array_to_search_through):
    """
    This function returns the index of the first occurance of the value_to_find in the array_to_search_through.

    Args:
        value_to_find (int): The value to find in the array_to_search_through.
        array_to_search_through (list): The list to search through.

    Returns:
        int: The index of the first occurance of the value_to_find in the array_to_search_through
        None: If the value_to_find is not in the array_to_search_through.
    """

    for i, el in enumerate(array_to_search_through):
        if el == value_to_find:
            return i

    return None
