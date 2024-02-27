"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[5615],{1841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>h,metadata:()=>p,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=(a(1694),a(3707)),s=a(6533),o=a(505);const h={sidebar_position:2},l="Breadth First Search",p={unversionedId:"graphs/bfs",id:"graphs/bfs",title:"Breadth First Search",description:"Breadth-first search is a graph traversal algorithm that explores all the vertices of a graph at the same level before moving to the next level, ensuring the shortest path to each vertex is discovered first.",source:"@site/docs/05-graphs/bfs.md",sourceDirName:"05-graphs",slug:"/graphs/bfs",permalink:"/2023/notes/graphs/bfs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Week 5: Searching Data",permalink:"/2023/notes/category/week-5-searching-data"},next:{title:"Depth First Search",permalink:"/2023/notes/graphs/dfs"}},d={},c=[{value:"Goals",id:"goals",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Breadth First Search",id:"breadth-first-search-1",level:2},{value:"(C)ases",id:"cases",level:3},{value:"(D)esign of Algorithm",id:"design-of-algorithm",level:3},{value:"Inheritance",id:"inheritance",level:2}],u={toc:c},m="wrapper";function g(e){let{components:t,...h}=e;return(0,i.kt)(m,(0,n.Z)({},u,h,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"breadth-first-search"},"Breadth First Search"),(0,i.kt)("p",null,"Breadth-first search is a graph traversal algorithm that explores all the vertices of a graph at the same level before moving to the next level, ensuring the shortest path to each vertex is discovered first."),(0,i.kt)(o.Z,{mdxType:"ChatBaseBubble"}),(0,i.kt)("h3",{id:"goals"},"Goals"),(0,i.kt)("p",null,"By the end of this lesson, you should be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"explain and implement ",(0,i.kt)("strong",{parentName:"li"},"breadth")," first search"),(0,i.kt)("li",{parentName:"ul"},"Inherit a class to create a ",(0,i.kt)("strong",{parentName:"li"},"child")," class"),(0,i.kt)("li",{parentName:"ul"},"Explain ",(0,i.kt)("inlineCode",{parentName:"li"},"is-a")," relationship"),(0,i.kt)("li",{parentName:"ul"},"Draw ",(0,i.kt)("strong",{parentName:"li"},"UML")," diagram for ",(0,i.kt)("inlineCode",{parentName:"li"},"is-a")," relationship")),(0,i.kt)("admonition",{title:"Keywords",type:"keyword"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"graph traversal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"breadth first search"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"distance"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"colour"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parent vertex"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inheritance"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"child class"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parent class"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"super"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In the previous lesson, we have introduced how we can represent a graph using object oriented programming. We created two classes ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Graph"),". One main use cases with this kind of data is to do some search. For example, given the graph of MRT lines, we would like to search what is the path to take from one station to another station. We usually are interested in the shortest path. This is what Google Map and other Map application does. In this lesson, we will discuss two graph search algorithms: breadth-first search and depth-first search."),(0,i.kt)("p",null,"To do these algorithms, our ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," class and ",(0,i.kt)("inlineCode",{parentName:"p"},"Graph")," class may need some additional attributes to store more information as it performs the search. One way to modify our classes is to create a new class. However, we would like to introduce the concept of ",(0,i.kt)("strong",{parentName:"p"},"Inheritance"),". Inheritance allows us to ",(0,i.kt)("em",{parentName:"p"},"re-use")," our existing class and create a new class that is derived from our existing class. Therefore, to implement our search algorithm, we will use inheritance to modify our existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Graph")," classes."),(0,i.kt)("h2",{id:"breadth-first-search-1"},"Breadth First Search"),(0,i.kt)("p",null,"Breadth first search is normally used to find a shortest path between two vertices. For example, when you plan your travel from one point to another point, breadth first search can identify the path you should take that gives the shortest path. How does this work? Let's take a look at the graph below."),(0,i.kt)("h3",{id:"cases"},"(C)ases"),(0,i.kt)(s.Z,{path:a(256).Z,widthPercentage:"30%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Let's say we want to find the shortest path from A to F. The way breadth-first search does is to calculate the distance of every vertex from A. So in this case, B will have a distance of 1 since it takes only one step from A to B. On the other hand, C has a distance of 2. D, however, has a distance of 1 since there is an edge from A to D connecting the two vertices directly. Vertex E has a distance 2 because from A it can go to D and then to E in two steps. Finally, F has a distance of 3. There are actually two paths from A to F. The first one is A - B - C - F and the second one is A - D - E - F. Notice that both has the same distance, which is 3."),(0,i.kt)("p",null,"How can we obtain all the distances for each vertex? We will start with the starting vertex which in this case is A. Next, we can look into the neighbouring vertices that A has. So in this case, A has two neighbours, i.e. B and D. We can then explore each of the neighbours. We can draw the the vertex that we are exploring as a kind of a tree."),(0,i.kt)(s.Z,{path:a(217).Z,widthPercentage:"30%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"We can then take turn to explore the neighbours of each of the children in the tree. In this case, B has two neighbours, i.e. A and C. But since we have visited A, we do not want to visit A again. So we should only visit C. This indicates that we need to mark the vertices that we have visited. Similarly, D has three children, i.e. A, C and E. But both A and C has been visited, so we should just add E into our tree. We can continue the same steps until all vertices have been visited. The final tree looks like the following."),(0,i.kt)(s.Z,{path:a(4481).Z,widthPercentage:"30%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"Notice that we can actually add F either to C or to E in the tree above. In this case, we choose to add to C. The question is when do we stop? We should stop when all the vertices have been explored in terms of their children. Therefore, we need some way to indicate if a Vertex's children have been fully explored. The way we are going to do this is to colour the vertices. Moreover, we are going to use three different colours:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"white: is used to indicate that we have not visited the vertex"),(0,i.kt)("li",{parentName:"ul"},"grey: is used to indicate that we have visited the vertex but we have not completely explored all the neighbours"),(0,i.kt)("li",{parentName:"ul"},"black: is when we have explored all the neighbours of this vertex.")),(0,i.kt)("p",null,"With this in mind, the image below shows the progression of the vertex exploration and how the colour of each vertex changes."),(0,i.kt)(s.Z,{path:a(374).Z,widthPercentage:"40%",mdxType:"ImageCard"}),(0,i.kt)("p",null,"In the figures above, we use a Queue data structure to explore the vertices. When we visit vertex, we put all its neighbouring vertices into a queue. This also ensures that we explore the vertices in a ",(0,i.kt)("strong",{parentName:"p"},"breadth-first")," manner. For example, when we explore B from A, we did not go to C but rather D, which is at the same level as B in our search tree. This is where the name breadth-first search comes from. So now we are ready to write our algorithm for breadth-first search."),(0,i.kt)("h3",{id:"design-of-algorithm"},"(D)esign of Algorithm"),(0,i.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input:\n- G: Graph\n- s: starting vertex\nOutput:\n- Graph with distances on every vertex from s\nSteps:\n1. Initialize every vertex with the following:\n  1.1 set color to white\n  1.2 set distance to INF\n2. start from s vertex:\n  2.1 set s' color to grey\n  2.2 set s' distance to 0\n3. put s into the Queue\n4. As long as Queue is not empty\n  4.1 take out one vertex from Queue and store to u\n  4.2 for each neighbour of vertex u, do:\n    4.2.1 if the neighbour colour is white, do:\n      4.2.1.1 set the neighbour's colour to grey\n      4.2.1.2 set the neighbour's distance to u's distance + 1\n      4.2.1.3 put the neighbour into the Queue\n  4.3 after finish exploring all neighbours, set u's color to black\n"))),(0,i.kt)("p",null,"In the above algorithm, we start by setting all the vertices to white and have a distance of ",(0,i.kt)("inlineCode",{parentName:"p"},"INF")," (infinite) or any large number value greater than the number of the vertices. We then start from the vertex s and explore its neighbours. Everytime we explore a neighbour, we check its colour. If the colour is white, it means that it has not been visited previously, so we change the colour to grey and add the distance by one. We then put this neighbour into the queue to visit its neighbours later on. We proceed visiting the vertices by taking out the vertex from the Queue. As mentioned, it is the Queue that ensures that we visit the vertices in a breadth-first manner."),(0,i.kt)("p",null,"The only thing about this algorithm is that we only get a graph with distances on each vertex, but we would not be able to retrieve the path to take from s to the destination vertex. In order to find the shortest path, we need to store the ",(0,i.kt)("strong",{parentName:"p"},"parent")," vertex when we visit a neighbouring vertex. To do this, we modify the algorithm as follows."),(0,i.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input:\n- G: Graph\n- s: starting vertex\nOutput:\n- Graph with:\n  - distances on every vertex from s\n  - parent vertex on every vertex that leads back to s\nSteps:\n1. Initialize every vertex with the following:\n  1.1 set color to white\n  1.2 set distance to INF\n  1.3 set parent to NILL\n2. start from s vertex:\n  2.1 set s' color to grey\n  2.2 set s' distance to 0\n  2.3 set s' parent to NILL\n3. put s into the Queue\n4. As long as Queue is not empty\n  4.1 take out one vertex from Queue and store to u\n  4.2 for each neighbour of vertex u, do:\n    4.2.1 if the neighbour colour is white, do:\n      4.2.1.1 set the neighbour's colour to grey\n      4.2.1.2 set the neighbour's distance to u's distance + 1\n      4.2.1.3 set u as the parent vertex of the neighbour\n      4.2.1.4 put the neighbour into the Queue\n  4.3 after finish exploring all neighbours, set u's color to black\n"))),(0,i.kt)("p",null,"In the second algorithm, we have a new attribute called ",(0,i.kt)("strong",{parentName:"p"},"parent"),". In the beginning we set all vertices to have NILL as their parents. Since s is the starting vertex, it has no parent and so we set to NILL in step 2.3. We added step 4.2.1.3 where we set u as the parent to the neighbouring vertex when we add that neighbouring vertex into the Queue."),(0,i.kt)("p",null,"With this, we can write another algorithm to retrieve the path from s to some destination vertex v."),(0,i.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Find-Path BFS\nInput:\n- G: graph after running BFS\n- s: start vertex\n- v: end vertex\nOutput:\n- list of vertices that gives the shortest path from s to v\nSteps:\n1. if v is the same as the start vertex\n  1.1 return a list with one element, i.e. s\n2. otherwise, check if parent of v is NILL\n  2.1 return "No path from s to v exist"\n3. otherwise,\n  3.1 call find-path(G, s, parent of v)\n  3.2 add v into the result from 3.1\n')),(0,i.kt)("p",null,"The above algorithm uses recursion. There are two base cases. The first base case is when the destination vertex to be the same as the starting vertex. In this case, the output is just that vertex. The second base case is when there is no path from s to v. We know there is no path when along the path starting from v we find a vertex which parent is NILL. The recursion case is described in step 3. In this case, we call the same function but with the destination vertex to be the parent of the current destination vertex. By moving the destination vertex to the parent, we reduce the problem and make it smaller until we reach base case described in step 1."),(0,i.kt)("p",null,"Let's see an example when we search a shortest path from A to F in the previous graph. In this case, v is not the same as s since A and F are two different vertices. So we look into F's parent, which is C. Now we call the same function to find the path from A to C. Since A and C are different, we look into C's parent, which is B and call the function to find the path from A to B. Finally, we look into B's parent and find the path from A to A. This is the base case. When we reach the base case, we return a list containing A as the result (step 1.1). Then we move back and do step 3.2 to add B, C, and finally F. So the shortest path from A to F will be a list ",(0,i.kt)("inlineCode",{parentName:"p"},"[A, B, C, F]"),"."),(0,i.kt)("p",null,"Now it's time to implement the algorithm. But before we can implement the algorithm, we need to modify the class ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," to contain a few additional attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"colour"),(0,i.kt)("li",{parentName:"ul"},"distance"),(0,i.kt)("li",{parentName:"ul"},"parent")),(0,i.kt)("p",null,"As mentioned in the Introduction, we will do this using the concept of ",(0,i.kt)("strong",{parentName:"p"},"Inheritance"),".")),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"Inheritance is an important concept in object oriented programming that allows us to re-use existing code or classes we have written. In our example here, we already have a class ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Graph"),". However, the class ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," only contains ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"neighbours"),"."),(0,i.kt)("mermaid",{value:"classDiagram\nclass Graph{\n  vertices\n  add_vertex(id)\n  get_vertex(id)\n  add_edge(start_id, end_id, weight)\n  get_neighbours(id)\n  get_num_vertices()\n}\n\nclass Vertex{\n  id\n  neighbours\n  add_neighbour(neighbour_vertex, weight)\n  get_neighbours()\n  get_weight(neighbour_vertex)\n}"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"As shown in the previous section, our ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," object has additional attributes such as ",(0,i.kt)("em",{parentName:"p"},"colour"),", ",(0,i.kt)("em",{parentName:"p"},"distance"),", and ",(0,i.kt)("em",{parentName:"p"},"parent"),". We can actually create a new class containing all these new properties as well as the commonly found properties of a vertex (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"neighbours"),"). However, we will duplicate our codes and rewriting the methods that is the same for all ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," objects such as adding a neighbour. Inheritance allows us to create a new class without duplicating all the other parts that is the same. By using inheritance, we create a new class by ",(0,i.kt)("em",{parentName:"p"},"deriving")," it from an existing base class. In this example, we can create a new class called ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," that is derived from a base class ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),". When a class inherits another class, the new class possess all the attributes and methods of its parent class. This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," class contains both ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"neighbours")," as well as all the methods that ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," class has. What we need to do is simply to specify what is different with ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," that ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," class does not have. We can represent this relationship using a UML diagram as shown below."),(0,i.kt)("mermaid",{value:"classDiagram\nclass Vertex{\n    id\n    neighbours\n    add_neighbour(neighbour_vertex,weight)\n    get_neighbours()\n    get_weight(neighbour_vertex)\n}\nclass SearchVertex{\n    colour\n    distance\n    parent\n}\nSearchVertex --\x3e Vertex"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"In the UML diagram, the relationship is represented as an arrow with a white triangle pointing from the child class to the parent class. This relationship is also called ",(0,i.kt)("strong",{parentName:"p"},"is-a")," relationship which simply means that ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," ",(0,i.kt)("em",{parentName:"p"},"is-a")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),", it has all the attributes and methods of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," object."),(0,i.kt)("p",null,"In Python, we can specify if a class derives from another class using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class NameSubClass(NameBaseClass):\n    pass\n")),(0,i.kt)("p",null,"For our example here, we can write the ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," class as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class SearchVertex(Vertex):\n    pass\n")),(0,i.kt)("p",null,"In the above class definition, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex")," inside the parenthesis to indicate to Python that we will use this as the ",(0,i.kt)("em",{parentName:"p"},"parent")," class or ",(0,i.kt)("em",{parentName:"p"},"base")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," class. In this new class, we can initialize all the new attributes as usual:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import sys\n\nclass SearchVertex(Vertex):\n    def __init__(self, id=""):\n        super().__init__(id)\n        self.colour = "white"\n        self.d = sys.maxsize\n        self.parent = None\n')),(0,i.kt)("p",null,"Notice here that we initialize:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"colour"),' to be "white"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"d")," to be a large integer number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent")," to be a ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," object")),(0,i.kt)("p",null,"The first line ",(0,i.kt)("inlineCode",{parentName:"p"},"super().__init__(id)")," is to call the parent class' initialization method to initialize the both the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"neighbours"),". The word ",(0,i.kt)("inlineCode",{parentName:"p"},"super"),' comes from Latin which means "above". Therefore, ',(0,i.kt)("inlineCode",{parentName:"p"},"super()")," method returns a reference to the parent's class. Since we have both ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__()")," method in ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Vertex"),", we need to be able to differentiate the two methods. For this purpose, Python provides ",(0,i.kt)("inlineCode",{parentName:"p"},"super()")," method to refer to the parent's class methods instead of the current class."),(0,i.kt)("p",null,"In the child class ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchVertex")," we redefine the ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__()")," method of the parent's class. This is what is called as ",(0,i.kt)("strong",{parentName:"p"},"method overriding"),". We will discuss more of Inheritance in future lessons."))}g.isMDXComponent=!0},374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bfs_colour-0fe8887232ca5ce9befc256911068711.jpg"},256:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bfs_graph_example-a3c01246bcad91ad23506c95cad9316f.jpg"},217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bfs_tree1-02624e2c4860127b3c38e50e66511ed8.jpg"},4481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bfs_tree2-5989a01cc4fff38430c70922d4442fcb.jpg"}}]);