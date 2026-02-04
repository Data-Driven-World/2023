---
sidebar_position: 1
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Recursion

Recursion is a programming technique in which a function calls itself to solve a problem by breaking it down into smaller subproblems.

<ChatBaseBubble/>

### Goals

By the end of this lesson, you should be able to:

- Solve problems using **recursion**.
- Identify problems that has recursive solutions.
- Identify **base case** and **recursive case** in a recursive problem and its solution.
- Use **helper function** for a recursive solution.
- Explain and implement the recursive solution of **Tower of Hanoi**.
- Derive solution for **recurrence** of Tower of Hanoi using **recursion-tree** method.


:::keyword Keywords
`recursion`, `base case`, `recursive case`, `recursion tree`
:::

## Introduction

Many computing problems are recursive in structure. With the word _recursive_ we mean that to solve a given problem, they _call themselves_ one or more times to solve a closely related problems. These algorithms in a way follow a _divide-and-conquer_ approach.

Divide and conquer approach breaks the problem into several subproblems that are similar to the original problem but smaller in size. The algorithm then solves this smaller problems and then combines the solutions to create the solution to the original problem. The divide-and-conquer paradigm involves three steps at each level of the recursion:

1. _Divide_ the problem into a number of smaller problems.
1. _Conquer_ the smaller problems by solving them recursively and when the problem is small enough, hopefully, it can be solved trivially.
1. _Combine_ the solutions of the smaller problems into the solution for the original problem.

## Summing The Elements of an Array

We will start giving example of divide-and-conquer approach by solving the following problem: summing a list of numbers in an array. Given a list of array, we can sum them by iterating over each element and sum each element to get the final solution. This _iterative_ solution looks as follows.

```python live_py
def sum(array):
    result = 0
    for number in array:
        result += number
    return result

input_array = [4, 3, 2, 1, 7]
print(sum(input_array))
```

### (C)ases

Another way of solving this problem can be done using a _divide-and-conquer_ approach. In this approach we divide the input array into two parts. The first part consists of a single number while the second part consists of the rest of the numbers. For example, using the input in the above example, we have

```
[4, 3, 2, 1, 7]
```

The above input is now divided into two parts:

```
4 | [3, 2, 1, 7]
```

This is the _divide_ step. In the _conquer_ step, we recursively solve the second part using the same method. This means that we divide the second part into two parts as follows.

```
[3, 2, 1, 7]
```

becomes

```
3 | [2, 1, 7]
```

And this continues recursively

```
[2, 1, 7]
```

becomes

```
2 | [1, 7]
```

and

```
[1, 7]
```

becomes

```
1 | [7]
```

Now the second part consists of only a single number, i.e. 7. Since the problem is small enough, the solution to the sum problem is simply this number, which is 7. This means that the sum of an array with a single number is just that number. So we can now proceed to the _combine_ step. We will combine the result by adding the number on the left with the sum of the array on the right.

```
1 | [7] = 1 + 7 = 8
```

and now we can move up

```
2 | [1, 7] = 2 + 8 = 10
```

similarly, we have these two summations

```
3 | [2, 1, 7] = 3 + 10 = 13

4 | [3, 2, 1, 7] = 4 + 13 = 17
```

### (D)esign of Algorithm

Let's write down the steps on how we solve those particular cases.

<DeepDive title="Show Pseudocode">

```
Input: Array or list of numbers
Output: the Sum of the array
Steps:
1. if the number of element is one only
    1.1 Return that element as the sum of the array
2. Otherwise,
    2.1 Return the addition of the first element with the sum of the rest of the array
```

</DeepDive>

### Recursive Basic Structure

In all recursive solutions, we can identify the following characteristics:
- recursive solutions usually make use of **functions that calls itself**.
- these solutions have two general cases, the base case and the recursive case.
- the solutions are constructed using the same recursive code that is applied multiple time at different frames.

Let's go through this one by one.

The first is that recursive solutions usually make use of functions that calls itself. In the pseudocode above for summing a list of numbers, we can see that the solution to sum a list of numbers contains the step 2.1 which adds the first element to the *sum of the rest of the array*. To get the sum of the rest of the array, we can actually call the same function to compute the sum of a list of numbers. The only difference is that the array is smaller in this case because it excludes the first element. This can be implement by calling the same function as what is defined in this pseudocode but passing a different and smaller array from the original array.

The second characteristic is that we can always identify two **cases**:

1. **Base** Case
1. **Recursive** Case

In the algorithm steps above, step 1 is the **base** case. Base case is usually trivial and easy to solve. Recall that the strategy for this way of divide and conquer is to divide the problem into smaller problems up to the point that the problem becomes trivial. In this example, a trivial problem is to sum an array with only one element. In this case, the sum is just that element.

Step 2 is the **recursive** case. Notice in step 2.1 we are adding the first element with the _sum of the rest of the array_. The _sum of the rest of the array_ is the **same** problem but with one element less. In this way, we have made the problem smaller. It is called _recursive_ because this step calls the function itself with a smaller number of element in the array. How to break down and make the problem smaller will be one of the challenge in creating recursive solutions. Moreover, identifying the base case will also be important. Let's take a look at some more example in a later section. But for now, we will analyze the computation time.

It's important to highlight some characteristics of the base case and the recursive case. The solution to the base case is usually:
- trivial, and
- terminating

Trivial means that the solution is simple and easy to do. This is the reason why we want to break down the problem into smaller problems with the same substructure so that we can solve it easily. In our summation problem, the trivial solution is to sum a list of one element. The solution is trivial because the sum of one element is just that element itself.

Terminating means that the recursive process stops here at the base case. Otherwise, recursive solutions may never stops and we may reach and infinite recursive process. One indication it is a base case is that we do not have anywhere in this part of code that calls the recursive function again.

This is unlike the recursive case. In the recursive case, we do have some part of the code that actually calls the function again. We can call this function again because recursive case has two characteristics:
- it is the **same** problem
- it is a **smaller** problem

We can solve a problem using recursion if it has the **same** substructure when we break the problem into smaller problem. This means that the solutions involves the same problem. In the case of summing a list of numbers, we break the problem by adding the first element with the *sum of the rest of the array*. Summing the rest of the array is the same problem as the original problem.

The other characteristic is that the recursive case should solve a **smaller** problem and not the same problem. This is crucial because the aim is break down the problem into smaller problem which hopefully at the end will reach the base case. Therefore, there must be a way to reduce the problem into smaller problem. If not, we will never reach the base case and the recursion will never end. In our example of summing the list of numbers, we make the problem smaller by summing not the original array but rather the *rest of the array* except the first element. This reduces the size of the array by one. If we continue to apply the recursive case, we will reach the time when there is only one element left in the array and we have hit the base terminating case. 

## Computation Time

As you can guess from the _iterative_ solution, this problem takes $O(n)$ time. This means that as the number of input increases, the computation time increases linearly. How do we come about this computation time for recursive solution? One way to do this is to draw the _recursion tree_.

In a recursion tree, each node represents the cost of a single subproblem somewhere in the set of recursive function invocations. We then have to do two summations. The first sum is to sum all the cost on each level of the tree to obtain a set of cost-per-level. The second sum is to sum all cost-per-level over all levels to obtain the total cost.

To illustrate that, let's take a look at the example above on summing the elements in an array. Looking at the pseudocode, we see that the program will execute either step 1 or step 2 and not both. We can then make the following observation:

- if it is the base case, the computation time is $O(1)$ because it takes constant time to check the case and constant time to return the element of an array.
- if it is the recursive case, the computation time is $T(n) = O(1) + T(n-1)$. The constant time comes from the addition operation which is the _combine_ step. On the other hand, this computation time contains $T(n-1)$ due to the recursive call for $n-1$ elements array.

The recursion tree can be drawn as follows.

<ImageCard path={require("./images/sum_recursiontree.png").default} widthPercentage="70%"/>

The first figure on the left shows that the computation time for $n$ elements is a constant $c$ plus $T(n-1)$. The second figure in the middle shows the tree when we expland $T(n-1)$. That recursive call is when the input array is $n-1$ elements. The computation time when $n-1$ can be explanded as another $c$ plus $T(n-2)$. We can continue doing this until we are left only with one element, which is shown on the figure on the right with $T(1)$. The tree only has one child on each node and each level has the same cost which shown by the arrow pointing to the right. We can show that there are $n$ levels in the three for $n$ elements of input in the original call.

The cost for each level is a constant $c$ and we have $n$ levels, so the total cost is $cn$, and therefore we can say that the computation time for this recursion is $T(n) = O(n)$.

## Factorial Problem

Factorial problem can be defined recursively as follows:

### (P)roblem Definition

Taking an integer input $n$, the factorial can be calculated as follows:

$$n! = n \times (n-1)!$$

We also define the factorial of the following input numbers:
$$0! = 1$$
$$1! = 1$$

Let's take a look at some particular examples.

### (C)ases

Besides those two inputs 0 and 1, we can calculate, for example, the factorial of 5 as follows:

$$5! = 5 \times 4!$$

And we calculate 4 factorial with

$$4! = 4 \times 3!$$

Similarly,

$$3! = 3 \times 2!$$

and

$$2! = 2 \times 1!$$

but we have defined that $1! = 1$. This is the base case. So we can calculate back up.

$$2! = 2 \times 1 = 2$$

$$3! = 3 \times 2! = 3 \times 2 = 6$$

$$4! = 4 \times 3! = 4 \times 6 = 24$$

$$5! = 5 \times 4! = 5 \times 24 = 120$$

Now we can write the steps.

### (D)esign of Algorithm

<DeepDive title="Show Pseudocode">

```
Input: n, an integer
Output: factorial of n, an integer
Steps:
1. if n is equal to 0 or to 1
    1.1 return 1
2. otherwise,
    2.1 return n x factorial of n-1
```

</DeepDive>

Notice again here that step 1 is the **base** case which is trivial. The base case is also the **terminating** case. Without the base case the recursive solution will not end. So it is important to remember that every recursive solution must have a base case.

Step 2 is the **recursive** case. In this recursive case, we divide the problem of calculating factorial of $n$ into a smaller problem to calculate only the factorial of $n-1$ and a multiplication. Calculating the _factorial_ of $n-1$ calls the function itself because it is exactly the same problem but with a smaller integer at the input. Let's discuss the computational time.

### Computational Time

The computation time can be calculated as follows:

- To check whether it is the base case or not, it takes constant time $O(1)$.
- If it is the base case, it returns and exits the function immediately. So the computation time when it is a base case is simply constant time, i.e. $O(1)$.
- On the other hand, if it is not a base case, the computation time is $T(n) = O(1) + T(n-1)$. The constant time is the time it takes to multiply $n$ with the factorial of $n-1$. The second term $T(n-1)$ is the computation time to calculate the factorial of $n-1$.

From the above describe, we have the same recursive tree as before.

<ImageCard path={require("./images/sum_recursiontree.png").default} widthPercentage="70%"/>

From here, we can conclude that the computation time is linear, i.e. $T(n) = O(n)$, a function of the input integer.

In the above two examples, summing an array and calculating a factorial, the solutions can be written either using recursion or iteration (such as a for-loop). It is not evident why we need a recursive solution in these two cases. However, there are cases when the iterative solution would be too complicated and its recursive solution is simple and elegant. One example of this is the problem of Tower of Hanoi which we will discuss next.

## Tower of Hanoi Problem

Tower of Hanoi is a classic example of when its recursive solution is simple and elegant. The problem is specified as follows.

### (P)roblem Definition

Given $n$ disks and three towers, one has to move the $n$ disks from the _source_ tower to the *destination tower using the other *auxilary\* tower. See figure below.

<ImageCard path={require("./images/tower_of_hanoi.jpeg").default} widthPercentage="70%"/>

In the above figure, we have three towers A, B, and C. And we have to move $n=3$ disks from tower A to tower B using tower C as the auxiliary tower.

The rules in moving the disks are as follows:

- We can only move one disk at a time
- A bigger disk cannot be placed on top of a smaller disk

Note that $n$ can be 1 or greater.

### (C)ases

Let's look at some particular cases. Let's start with a simple case when $n=1$. In this case, to move one disk from A to B is trivial.

1. Move disk 1 from A to B

and we are done.

How about when $n = 2$. Recall that our source tower is A and the destination tower is B while the auxiliary tower is C. In order to move two disks, we can do the following.

**Moving two disks:**

1. Move disk 1 from A (source) to C (auxiliary)
1. Move disk 2 from A (source) to B (destination)
1. Move disk 1 from C (auxiliary) to B (destination)

Let's take a look when $n = 3$. To work this out, you can use the [simulation for tower of Hanoi](https://www.mathsisfun.com/games/towerofhanoi.html). We will divide this into a few step. The first step is to move the first two disks from A (source) to C (auxiliary). In order to move two disks, we already have the solution as shown above. So we can use the steps above with the difference in the destination and auxiliary towers.

**Step 1**

1. Move disk 1 from A (source) to B (destination)
1. Move disk 2 from A (source) to C (auxiliary)
1. Move disk 1 from B (destination) to C (auxiliary)

Now we have the first two disks at C (auxiliary). The next step is to move disk 3 from A (source) to B (destination). This consists of only one step.

**Step 2**

1. Move disk 3 from A (source) to B (destination)

The last step is to move the two disks from C (auxiliary) to the destination tower B. This again involves a similar three steps with differences in the source and destination towers. The steps to move the two disks to the final destination tower is as follows.

**Step 3**

1. Move disk 1 from C (auxiliary) to A (source)
1. Move disk 2 from C (auxiliary) to B (destination)
1. Move disk 1 from A (source) to B (destination)

Notice that **Step 1** and **Step 3** involve the same steps as in **Moving two disks**. In fact, we can see Step 1 as Moving two disks with tower A as the source and tower C as the destination using tower B as the auxiliary tower. Similarly, we can see Step 3 as moving two disks with tower C as the source and tower B as the destination with tower A as the auxiliary tower. Moreover, the steps in **Moving two disks** are exactly the same **three steps**. We first move the top disks to the auxiliary tower, then the bottom disk to the destination tower, and lastly the top disks to the destination tower. In this way, we can use the same steps whenever there are more than 1 disks. In general, we can view this problem for $n$ disks as shown in the figure below.

<ImageCard path={require("./images/tower_of_hanoi_general.jpeg").default} widthPercentage="70%"/>

where we divide the disks into two parts:

- the first $n-1$ top disks
- the last disk $n$

We can then generalize the Tower of Hanoi problem to any number of disks as in the following steps.

### (D)esign of Algorithm

<DeepDive title="Show Pseudocode">

```
Input:
  - n, number of disks
  - source tower
  - destination tower
  - auxiliary tower
Output:
  - sequence of steps to move n disks from source to destination tower using auxiliary tower
Steps:
1. if n is 1 disk:
    1.1 Move the one disk from source to destination tower
2. otherwise, if n is greater than 1:
    2.1 Move the first n - 1 disks from source to auxiliary tower
    2.2 Move the last disk n from source to destination tower
    2.3 Move the first n - 1 disks from the auxiliary tower to the destination tower
```

</DeepDive>

Notice that in the above steps, step 1 is the **base** case while step 2 is the **recursive** case. The base case is when the solution is trivial. This is the case when there is only one disk. The solution involves only one step which is to move that one disk from the source to the destination tower. On the other hand, step 2 is the recursive case. In this step, both steps 2.1 and step 2.3 are the recursive steps that reduce the problem smaller to $n-1$ disks. Step 2.2 consists of only a single step.

Looking into these steps and compare it with the examples in the previous steps, we observe that both the steps in **moving two disks** and the three steps in moving $n=3$ disks fall under the same recursive step 2. Both consist of three general steps 2.1, 2.2, and 2.3.

### Computational Time

Now, let's analyze it's computational time. Looking into the steps above, we note the following:

- it takes $O(1)$ to do the comparison whether it is one disk or more
- if it is only one disk, it takes $O(1)$ time to produce the single step and exit the function
- otherwise, it takes $T(n-1)$ time for step 2.1, and $O(1)$ for step 2.2, and another $T(n-1)$ for step 2.3

Let's draw the recursive tree for 3 disks.

<ImageCard path={require("./images/tower_of_hanoi_time_3.jpeg").default} widthPercentage="70%"/>

Note that if $n=3$, it takes constant $c$ time and $2 \times T(n-1) = 2 \times T(2)$ computational time. In the recursive steps, each of this $T(2)$ recursive call consists of another constant $c$ time and $2 \times T(1)$ time. The tree stops at $i = n - 1 = 2$ when it reaches the base case as there is only one disk left.

Now we can generalize this to $n$ disks. The recursive tree looks as the one below.

<ImageCard path={require("./images/tower_of_hanoi_time_n.png").default} widthPercentage="70%"/>

There will be $n$ levels from $i = 0$ up to $i = n - 1$. Moreover, at each level, the sum total time is $2^i \times c$. If we sum up all the levels, we have the following series:

$$T(n) = \sum_{i = 0}^{n-1} 2^i c = c \sum_{i = 0}^{n-1}2^i$$

Recall that the sum for a Geometric series is given as follows

$$a + ar + a r^2 + \ldots + a r^{n-1} = \frac{a(1-r^n)}{1 - r}$$

where $a$ is the constant of the series and $r$ is the ratio. In our case, $a = c$ and $r = 2$. So we have

$$T(n) = c \sum_{i = 0}^{n-1}2^i = \frac{c(1-2^n)}{1 - 2} = c (2^n -1) = O(2^n)$$

This means that the computational time for the Tower of Hanoi problem is _exponential_ with respect the input. As the number of input increases, the time it takes increases exponentially.

- when $n = 1$, it takes 1 step
- when $n = 2$, it takes 3 steps
- when $n = 3$, it takes 7 steps
- when $n = 4$, it takes 15 steps
- when $n = 5$, it takes 31 steps

Notice also that in this case $c = 1$ as we can get the number of steps from $2^n - 1$.

## Helper Functions

There are cases when a recursive solution employs a recursive _helper_ function. This is usually so that the recursive function is efficient in terms of memory or some other aspects. Let's try to illustrate this by constructing a recursive solution for a binary search problem.

In a binary search problem, the goal is to find whether an element or a _key_ can be found in a collection or a list. The solution is intuitive enough if the list is sorted with some order. The way binary search works then is to look whether the element (or the key) that we want to find is in the middle. If yes, then we have found it. If not, we check if the key is smaller or larger than the middle element. If it is smaller, we continue the search in the left part (smaller part) of the list. Otherwise, we search in the right part (bigger part) of the list.

```python live_py
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

found = binary_search([1, 2, 3, 4, 5, 6, 7], 4)
print(found)

found = binary_search([1, 2, 3, 4, 5, 6], 11)
print(found)
```

The above solution is recursive. You can identify the first two conditions are the base cases which is when the key is not found or when the key is the middle point element. The last two cases are the recursive case as can be seen from the function call `binary_search()`. In these recursive call, we can see that the collection is halved and becomes smaller than the original collection. This agrees with our pattern for the recursive solutions.

However, the above approach was not efficient for large list or collection. The reason is that the recursive calls inside the recursive case create new lists in the memory when slicing the original list into half. Is there a better and more efficient way? The answer is yes. We do not need to slice the list. We can make use of the original list by passing the index of the starting and the ending position of the list which we want to search instead. See the new solution below.

```python live_py
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
```

Instead of dealing with python list slicing and creating new list every recursive call, the above solution works with the original list instead. In every subsequent recursive call, it passes on the original list with two additional index, i.e. `start` and `end`. These two arguments indicate the starting and the ending position of the index (as usual, the ending index is exclusive of the last element). This way, search the left hand side can be written simply as `binary_search(coll, key, start, mid_pos)`. We search the key from the `start` position all the way to the `mid_pos` position which excludes the middle element in the current search.

However, the use of this function is cumbersome as can be seen from the way we call the function in the test cases below.

```python
input_coll = [1, 2, 3, 4, 5, 6]
binary_search(input_coll, 2, 0, len(input_coll))
binary_search(input_coll, 4, 0, len(input_coll))
input_coll_odd = [1, 2, 3, 4, 5, 6, 7]
binary_search(input_coll_odd, 4, 0, len(input_coll_odd))
binary_search(input_coll_odd, 11, 0, len(input_coll_odd))
```

In the original call, the last two argument are always `0` and `len(input_coll)`. We can transform this to be more similar to our original function by employing two functions as shown below.

```python live_py
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
```

In the above solutions, we can see that the original function call has been simplified to only with two arguments as the first solution. On the other hand, we rename our recursive function that do the actual work as `binary_search_helper()`. This is the function that contains the recursive calls. This solution is more efficient than the first one because it does not make a copy of the list when doing the binary search. 

