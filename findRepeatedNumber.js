function printRepeating(arr , size)
    {
        let i, j;
        document.write("Repeated Numbers are :");
        for (i = 0; i < size; i++)
        {
            for (j = i + 1; j < size; j++)
            {
                if (arr[i] == arr[j])
                    document.write(arr[i] + " ");
            }
        }
    }
 
let arr = [4, 2, 4, 5, 2, 3, 1];
let arr_size = arr.length;
printRepeating(arr, arr_size);
