"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[6702],{5413:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(7462),r=t(7294),s=t(3905),o=(t(1694),t(3707),t(6533),t(505));const i={sidebar_position:2},m="NumPy Array",l={unversionedId:"data-visualization/numpy-array",id:"data-visualization/numpy-array",title:"NumPy Array",description:"In the subsequent lessons, we will work with NumPy array instead of Pandas dataframe. Pandas dataframe is based on Numpy's array and many of the operations are similar between the two. However, there are some differences as well.",source:"@site/docs/09-data-visualization/numpy-array.md",sourceDirName:"09-data-visualization",slug:"/data-visualization/numpy-array",permalink:"/2023/notes/data-visualization/numpy-array",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Working With Data",permalink:"/2023/notes/data-visualization/working-with-data"},next:{title:"Visualization",permalink:"/2023/notes/data-visualization/visualisation"}},p={},u=[{value:"Goals",id:"goals",level:3},{value:"Converting Pandas&#39; Dataframe to NumPy Array",id:"converting-pandas-dataframe-to-numpy-array",level:2},{value:"Accessing NumPy Array Elements",id:"accessing-numpy-array-elements",level:2},{value:"Creating NumPy Array From Scratch",id:"creating-numpy-array-from-scratch",level:2},{value:"Operations on Array Elements",id:"operations-on-array-elements",level:2},{value:"Summation of Elements",id:"summation-of-elements",level:3},{value:"Statistical Functions",id:"statistical-functions",level:3},{value:"Matrix Operations and Broadcasting",id:"matrix-operations-and-broadcasting",level:3},{value:"Summary",id:"summary",level:2}],c={toc:u},h="wrapper";function d(e){let{components:a,...t}=e;return(0,s.kt)(h,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"numpy-array"},"NumPy Array"),(0,s.kt)("p",null,"In the subsequent lessons, we will work with NumPy array instead of Pandas dataframe. Pandas dataframe is based on Numpy's array and many of the operations are similar between the two. However, there are some differences as well."),(0,s.kt)(o.Z,{mdxType:"ChatBaseBubble"}),(0,s.kt)("h3",{id:"goals"},"Goals"),(0,s.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Convert Pandas Dataframe to NumPy Array"),(0,s.kt)("li",{parentName:"ul"},"Selecting data from NumPy Array"),(0,s.kt)("li",{parentName:"ul"},"Use mathematical, statistical and linear algebra functions on NumPy Array"),(0,s.kt)("li",{parentName:"ul"},"Creating new Numpy Arrays")),(0,s.kt)("admonition",{title:"Keywords",type:"keyword"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"Data Frame"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"row"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"column"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"numpy array"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"zeros array"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ones arrays"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"shape"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"axis"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"dimension"))),(0,s.kt)("h1",{id:"introduction-to-numpy-array"},"Introduction to NumPy Array"),(0,s.kt)("p",null,"NumPy array is more basic than Pandas' dataframe. In fact, Pandas' dataframe is based on NumPy array. At the same time, numpy array is more general and can be used for many other computations. Pandas' dataframe, on the other hand, is designed specifically to work with data in tabular format. "),(0,s.kt)("h2",{id:"converting-pandas-dataframe-to-numpy-array"},"Converting Pandas' Dataframe to NumPy Array"),(0,s.kt)("p",null,"We can convert Pandas dataframe easily to numpy array using ",(0,s.kt)("inlineCode",{parentName:"p"},"df.to_numpy()")," function. For example, we can have the following code to read for a CSV file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.read_csv('mydata.csv')\narray = df.to_numpy()\n")),(0,s.kt)(r.Fragment,null,(0,s.kt)("iframe",{src:"https://trinket.io/embed/python3/3f36c796c05d",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0})),(0,s.kt)("p",null,"What is so different between Pandas dataframe and NumPy array. One obvious thing is that NumPy array is more plain. We no longer see any ",(0,s.kt)("strong",{parentName:"p"},"row index")," nor the ",(0,s.kt)("strong",{parentName:"p"},"column names")," in a NumPy array, unlike Pandas dataframe. We can still see a two dimensional data in NumPy array. This is because NumPy array can represent one dimensional, two-dimensional, or even higher dimensional arrays. Pandas makes use of NumPy array. For example, Pandas Series data type is based on a one-dimensional NumPy array. Similarly, Pandas dataframe is based on two-dimensional NumPy array. However, Pandas do not need higher dimension as most of its data is tabular similar to a spreadsheet. On the other hand, NumPy array is more general because it can represent higher dimensional array. This is useful, for example, when we deal with ",(0,s.kt)("strong",{parentName:"p"},"tensors")," such as in neural network and deep learning applications. This is one of the reason why we introduce NumPy array and makes use of NumPy array in our lessons here."),(0,s.kt)("p",null,"One of the properties that NumPy array has is its shape and we can obtain its shape in a similar way as we obtain Pandas dataframe shape. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(array.shape)\n")),(0,s.kt)("p",null,"Running the above code outputs the shape of our NumPy array which was converted from the Pandas dataframe."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(95858, 11)\n")),(0,s.kt)("p",null,"The above output shows it has two dimensions since it is a two dimensional array. The first dimension is 95858 and the second dimension is 11. We can think of the first dimension as the ",(0,s.kt)("em",{parentName:"p"},"row")," and the second dimension as the ",(0,s.kt)("em",{parentName:"p"},"column"),". However, when we are moving to higher order array, the term row and column may lose its meaning. In NumPy, we prefer to use the word ",(0,s.kt)("strong",{parentName:"p"},"axis"),". The number of axes is the number of dimension of the array. In our case here, we have two axes. The first axis has 95858 data points and the second axis has 11 data points. The first axis is also indexed as ",(0,s.kt)("strong",{parentName:"p"},"axis 0"),". As you can guess, the second axis is ",(0,s.kt)("strong",{parentName:"p"},"axis 1"),". The numbering continues for higher dimensional array. This numbering is important because many NumPy's functions has an optional ",(0,s.kt)("strong",{parentName:"p"},"axis")," argument to specify. "),(0,s.kt)("h2",{id:"accessing-numpy-array-elements"},"Accessing NumPy Array Elements"),(0,s.kt)("p",null,"We can access the elements of the array using the ",(0,s.kt)("strong",{parentName:"p"},"get item operator"),", i.e. the square bracket operator ",(0,s.kt)("inlineCode",{parentName:"p"},"[]"),". For example, we can get the first row using the following code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(array[0])\n")),(0,s.kt)("p",null,"Another way to get the first row is to use the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(array[0, :])\n")),(0,s.kt)("p",null,"NumPy use commas (",(0,s.kt)("inlineCode",{parentName:"p"},","),") to provide indices to access the elements at different axes. The first number before the first comma is for the first axis 0. The second number after the comma is to specify the elements to access in the second axis 1, and so on. In the code above, we access the first row (index 0) and all the columns (indicated by ",(0,s.kt)("inlineCode",{parentName:"p"},":"),")."),(0,s.kt)("p",null,"This means that we can get the first column using a similar way as shown below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(array[:, 0])\n")),(0,s.kt)("p",null,"Notice that the output is printed as a one dimensional array."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"['2017-01' '2017-01' '2017-01' ... '2021-04' '2021-04' '2021-04']\n")),(0,s.kt)("p",null,"We get all the dates, because the first column is the date of the transaction of the resale house price. "),(0,s.kt)("p",null,"With this simple notation, we can get individual element in the array as well as sub-array within an array. For example, to get the element on the first row and second column, we can do the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(array[0, 1])\n")),(0,s.kt)("p",null,"The output is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ANG MO KIO\n")),(0,s.kt)("p",null,"We can also get a sub-array of the current array. Let's say, we want to get the first 10 rows of the second and third columns. We can write the following code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"print(array[:10, 1:3])\n")),(0,s.kt)("p",null,"The output is shown as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[['ANG MO KIO' '2 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']\n ['ANG MO KIO' '3 ROOM']]\n")),(0,s.kt)("p",null," Notice that we used ",(0,s.kt)("strong",{parentName:"p"},"slicing")," similar to Python's list slicing. The column indices were ",(0,s.kt)("inlineCode",{parentName:"p"},"1:3")," to get the second and third column. The last number, i.e. 3, which is column 4 is excluded. Similarly, the row takes from index 0 to 9 and excludes row index 10. We also utilizes the feature that if we do not specify any number before the ",(0,s.kt)("inlineCode",{parentName:"p"},":")," operator, by default, it will be from the beginning which is row 0. "),(0,s.kt)("h2",{id:"creating-numpy-array-from-scratch"},"Creating NumPy Array From Scratch"),(0,s.kt)("p",null,"In this lesson, we started creating NumPy array by converting Pandas Dataframe. However, there are times when it is useful to create NumPy array from scratch. In this section, we will show some simple ways to create NumPy arrays. "),(0,s.kt)("p",null,"The first simple array is an array of zeros. This can be used when you know the size of your data and you want to initialize them all to zeros. NumPy has a function for this, i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"np.zeros()"),". The argument to this function is the shape of the array. For example, to create an array of ten zeros, you can write the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"zeros = np.zeros(5)\n")),(0,s.kt)("p",null,"Notice that if we print the shape using ",(0,s.kt)("inlineCode",{parentName:"p"},"zeros.shape"),", it gives us the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(5, )\n")),(0,s.kt)("p",null,"Notice that there is only one number because it is a one-dimensional array. If we print out this array, we will get the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"array([0., 0., 0., 0., 0.])\n")),(0,s.kt)("p",null,"We can create two dimensional array by providing a tuple for the argument of the function ",(0,s.kt)("inlineCode",{parentName:"p"},"np.zeros()"),". For example, the following creates a 2x3 array which all elements are zero."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> zero_matrix = np.zeros((2,3))\n>>> zero_matrix\narray([[0., 0., 0.],\n       [0., 0., 0.]])\n>>> zero_matrix.shape\n(2, 3)\n")),(0,s.kt)("p",null,"Notice the parenthesis ",(0,s.kt)("inlineCode",{parentName:"p"},"(2,3)")," inside the argument of ",(0,s.kt)("inlineCode",{parentName:"p"},"np.zeros()"),". With this, we can create a ",(0,s.kt)("em",{parentName:"p"},"row vector")," or a ",(0,s.kt)("em",{parentName:"p"},"column vector"),". For example, we can create a column vector of zeros with 10 elements using the following code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> col_vector = np.zeros((10,1))\n>>> col_vector\narray([[0.],\n       [0.],\n       [0.],\n       [0.],\n       [0.],\n       [0.],\n       [0.],\n       [0.],\n       [0.],\n       [0.]])\n")),(0,s.kt)("p",null,"Notice that our column vector is a two-dimensional array with one column. "),(0,s.kt)("p",null,"We also have another function ",(0,s.kt)("inlineCode",{parentName:"p"},"np.ones()")," to create a NumPy array which all elements are ones. For example, we can use the following code to create a column vector of one."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> col_vector_one = np.ones((10,1))\n>>> col_vector_one\narray([[1.],\n       [1.],\n       [1.],\n       [1.],\n       [1.],\n       [1.],\n       [1.],\n       [1.],\n       [1.],\n       [1.]])\n")),(0,s.kt)("p",null,"Sometimes, what we have is just a Python's list. NumPy allow us to convert Python's built-in list to NumPy array using ",(0,s.kt)("inlineCode",{parentName:"p"},"np.array()")," function. For example, let's say we have a list of lists representing a matrix. We can convert this into a NumPy array using this function. Below is an example of how we can do so."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> list_matrix = [[1, 2, 3],\n...                [4,5,6]]\n>>> array_matrix = np.array(list_matrix)\n>>> array_matrix\narray([[1, 2, 3],\n       [4, 5, 6]])\n")),(0,s.kt)("h2",{id:"operations-on-array-elements"},"Operations on Array Elements"),(0,s.kt)("p",null,"We can do various operations on the elements of the array. In the following section, we will show some of them. You should explore the NumPy documentation for more detail."),(0,s.kt)("h3",{id:"summation-of-elements"},"Summation of Elements"),(0,s.kt)("p",null,"One of the useful function is to sum the elements of the array. NumPy provides ",(0,s.kt)("inlineCode",{parentName:"p"},"np.sum()")," to do this. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> array_matrix\narray([[1, 2, 3],\n       [4, 5, 6]])\n>>> np.sum(array_matrix)\n21\n")),(0,s.kt)("p",null,"We can see that ",(0,s.kt)("inlineCode",{parentName:"p"},"np.sum()")," sums all the elements into a single number. We can change the behaviour if we want to sum across the rows or the columns by providing the optional argument ",(0,s.kt)("inlineCode",{parentName:"p"},"axis"),". For example, to sum across the rows, we do the following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.sum(array_matrix, axis=0)\narray([5, 7, 9])\n")),(0,s.kt)("p",null,"Recall that axis 0 is the dimension across the row. By providing ",(0,s.kt)("inlineCode",{parentName:"p"},"axis=0"),", we sum the elements across the rows and we get three numbers for each of the column. We can also sum across the columns by specifying ",(0,s.kt)("inlineCode",{parentName:"p"},"axis=1"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.sum(array_matrix, axis=1)\narray([ 6, 15])\n")),(0,s.kt)("p",null,"Notice that we only have two numbers because we only have two rows. We get ",(0,s.kt)("inlineCode",{parentName:"p"},"6")," from summing ",(0,s.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," which is the first row. We get ",(0,s.kt)("inlineCode",{parentName:"p"},"15")," from summing ",(0,s.kt)("inlineCode",{parentName:"p"},"[4, 5, 6]"),". "),(0,s.kt)("h3",{id:"statistical-functions"},"Statistical Functions"),(0,s.kt)("p",null,"Similar to sum, we can also get some descriptive statistics of the elements. For example, we can get the mean or median using ",(0,s.kt)("inlineCode",{parentName:"p"},"np.mean()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"np.median()"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.mean(array_matrix)\n3.5\n")),(0,s.kt)("p",null,"Similar to ",(0,s.kt)("inlineCode",{parentName:"p"},"np.sum()"),", we can provide the ",(0,s.kt)("inlineCode",{parentName:"p"},"axis")," information. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.mean(array_matrix, axis=0)\narray([2.5, 3.5, 4.5])\n>>> np.mean(array_matrix, axis=1)\narray([2., 5.])\n")),(0,s.kt)("p",null,"There are other statistical functions besides mean, such as standard deviation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.std(array_matrix, axis=0)\narray([1.5, 1.5, 1.5])\n>>> np.std(array_matrix, axis=1)\narray([0.81649658, 0.81649658])\n>>> \n")),(0,s.kt)("p",null,"For a more complete list of available functions, please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://NumPy.org/doc/stable/reference/routines.statistics.html"},"NumPy statistics documentation"),"."),(0,s.kt)("h3",{id:"matrix-operations-and-broadcasting"},"Matrix Operations and Broadcasting"),(0,s.kt)("p",null,"We will use matrix operations when we build our machine learning model and it is good to review some of these operations using NumPy array. NumPy makes it easy to work with vector and matrices. One powerful way is the concept of broadcasting. For example, we can add a scalar value to every element in a vector by just adding the vector with an integer as shown below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> ones = np.ones((5,1))\n>>> ones + 1\narray([[2.],\n       [2.],\n       [2.],\n       [2.],\n       [2.]])\n")),(0,s.kt)("p",null,"In the example above, the scalar value ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," is broadcasted to every element of the vector ",(0,s.kt)("inlineCode",{parentName:"p"},"ones"),". We also can multiply every element using the ",(0,s.kt)("inlineCode",{parentName:"p"},"*")," operator and a scalar value. Below is another example of multiplying every element in a matrix with a scalar value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> array_matrix * 2\narray([[ 2,  4,  6],\n       [ 8, 10, 12]])\n")),(0,s.kt)("p",null,"On top of that, NumPy allows you to do some common matrix operation such as vector addition with another vector and matrix multiplication. Let's give an example of a vector addition with another vector."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.ones((5,1)) + np.ones((5,1))\narray([[2.],\n       [2.],\n       [2.],\n       [2.],\n       [2.]])\n")),(0,s.kt)("p",null,"Notice that we have created two column vectors which elements are all ones and we add them. For this addition  operation to work, the shape must be correct. In this case, we must have the same shape. If the shape is not the same, it will give an error."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'>>> np.ones((5,1)) + np.ones((7,1))\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nValueError: operands could not be broadcast together with shapes (5,1) (7,1) \n')),(0,s.kt)("p",null,"However, due to broadcasting, you can actually add if the number of columns is different. For examples, see below code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-pytthon"},">>> np.ones((2,1)) + array_matrix\narray([[2., 3., 4.],\n       [5., 6., 7.]])\n")),(0,s.kt)("p",null,"In the above example, the column vector of ones with length two is broadcasted to every column in the ",(0,s.kt)("inlineCode",{parentName:"p"},"array_matrix"),". "),(0,s.kt)("p",null,"One common operation is matrix multiplication. For matrix multiplication, the dimension must be consistent. This means that the column size of the left matrix must be the same as the number of rows in the right matrix. To do matrix multiplication, we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"np.matmul()"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> np.matmul(np.array([[1, 2]]) , array_matrix)\narray([[ 9, 12, 15]])\n")),(0,s.kt)("p",null,"Recall that ",(0,s.kt)("inlineCode",{parentName:"p"},"array_matrix")," is as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> list_matrix = [[1, 2, 3],\n...                [4,5,6]]\n>>> array_matrix = np.array(list_matrix)\n")),(0,s.kt)("p",null,"In the above example, we have, ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 \\times 2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2")))))," matrix multiplied by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 \\times 3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3")))))," matrix, which results in a ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 \\times 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," matrix. "),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"In this lesson, we have reviewed NumPy array and some operations that maybe useful for doing machine learning. Machine learning uses a significant operation of linear algebra. It is good that you review your matrix operation and get comfortable on doing those operations using NumPy. Some common operations that you will need to know is how to create a NumPy array, how to get its shape and access its elements. Moreover, there are some functions that is useful for you when working with NumPy arrays such as mathematical functions, statistical functions and lastly matrix operations."))}d.isMDXComponent=!0}}]);