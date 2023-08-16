"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[846],{2677:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>x,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=a(7462),r=(a(7294),a(3905)),s=(a(1694),a(3707),a(6533),a(505));const i={sidebar_position:5},o="Week 5: Searching Data",c={unversionedId:"searching-data",id:"searching-data",title:"Week 5: Searching Data",description:"Concept Map",source:"@site/learning-objectives/05-searching-data.md",sourceDirName:".",slug:"/searching-data",permalink:"/2023/learning-objectives/searching-data",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Week 4: OOP",permalink:"/2023/learning-objectives/oop"},next:{title:"Week 6: Inheritance and Object-Oriented Design",permalink:"/2023/learning-objectives/inheritance"}},x={},l=[{value:"Concept Map",id:"concept-map",level:3}],S={toc:l},d="wrapper";function h(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},S,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"week-5-searching-data"},"Week 5: Searching Data"),(0,r.kt)(s.Z,{mdxType:"ChatBaseBubble"}),(0,r.kt)("h3",{id:"concept-map"},"Concept Map"),(0,r.kt)("mermaid",{value:"flowchart TD\n    PK((Prior Knowledge)) --\x3e |how to| CE((check element))\n    style PK color:red\n    PK --\x3e |how to| A((Access))\n    PK --\x3e |how to| T((Traverse))\n    PK --\x3e |how to| CT((Create))\n    PK --\x3e |on| DT((Dictionary))\n    style DT color:dodgerblue\n    A --\x3e |has| K((key))\n    A --\x3e |has| V((value))\n    CE --\x3e |in a| L((List))\n    style L color:dodgerblue\n    T --\x3e K\n    T --\x3e L\n    CT --\x3e DT\n    DT --\x3e |has| V\n    DT --\x3e K\n    L --\x3e |as| V\n    W((Week 5<br>Graph and Graph Search)) --\x3e |requires| PK\n    W --\x3e |learns| DS((Data Structure))\n    style DS color:red\n    DS --\x3e |learns| G((Graph))\n    G --\x3e |represented using| AM((Adjacency Matrix))\n    G --\x3e |represented using| AL((Adjacency List))\n    AL --\x3e |implemented using| DT\n    AL --\x3e |uses| L\n    AL --\x3e |implemented using| OO((Object Oriented))\n    G --\x3e |creates| V((Vertex))\n    G --\x3e |has| D((direction))\n    G --\x3e |has| VS((Vertices))\n    VS --\x3e |is a| DT\n    W --\x3e |learns| ALGO((Algorithm))\n    ALGO --\x3e |implements| S2D((Search 2D))\n    S2D --\x3e |has a| GS((Graph Search))\n    GS --\x3e |is a child of| G\n    VS --\x3e |collection of| V\n    V  --\x3e |has| ID((id_))\n    V --\x3e |has| N((neighbours))\n    N --\x3e |collection of| V\n    OO --\x3e |defines| CL((Class))\n    CL --\x3e |for| V\n    N --\x3e |is a| DT\n    N --\x3e |for key| DV((destination Vertex))\n    N --\x3e |for value| WEIGHT((weight))\n    D --\x3e |has| EDGE((Edge))\n    EDGE --\x3e |has| WEIGHT\n    N --\x3e |describes| EDGE\n    EDGE --\x3e |connects two| V\n    GS --\x3e |creates| VSH((Vertex Search))\n    VSH --\x3e |is a child of| V\n    VSH --\x3e |has| CDFP((color,d,f,parent))\n    UGS((UGraphSearch)) --\x3e |is a child of| GS\n    UGS --\x3e |for| UG((Undirected Graph))\n    UG --\x3e |has| BD((bidirectional))\n    BD --\x3e EDGE\n    SBFS((SearchBFS)) --\x3e |uses| GS\n    SBFS --\x3e |is a child of| S2D\n    SBFS --\x3e |implements| BFS((Breadth-First Search))\n    SBFS --\x3e |uses| CDFP\n    SBFS --\x3e |uses| UGS\n    SBFS --\x3e |uses| CDFP\n    SDFS((SearchDFS)) --\x3e |implements| DFS((Depth-First Search))\n    SDFS --\x3e |uses| CDFP\n    SDFS --\x3e |is a child of| S2D\n    TS((Topological Search)) --\x3e |uses| SDFS\n    DFS --\x3e |application| TS"}))}h.isMDXComponent=!0}}]);