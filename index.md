<h1 align="center"> CS-499 </h1>
<p align="center"> Capstone </p>
<p align="center"> Integrate previous coursework and practical experience with a focus on authentic demonstration of competencies outlined by the program. </p>

<p align="center">
<img alt="image" src="sources/snhu.png" width="150" height="150" />
</p>

 Table of Contents 
- [Course Description](#-course-description-)
- [Code Review](#-code-review-)
- [Software Design / Engineering](#enhancement-one---software-design--engineering)
- [Algorithms and Data Structures](#enhancement-two---algorithms-and-data-structure)
- [Databases](#enhancement-two---databases)
- [Self Assessment](#-self-assessment-)

<h2 align="center"> Course Description </h2>
Taken in the student’s final term, the capstone course is the culminating experience for the bachelor of science in computer science. Integrate previous coursework and practical experience with a focus on authentic demonstration of competencies outlined by the program. Enhance previously submitted programming projects that demonstrate a level of mastery of the stated outcomes of their degree program in computer science.

<h2 align="center"> Code Review </h2>

<p align="center">
<video width="640" height="480" controls>
<source src="https://youtu.be/7Z_6tyLAxTM" type="video/mp4">
</video>
</p>

<h2 align="center"> Enhancement One - Software Design / Engineering </h2>
The origin of this project is from CS-330, Computer Graphics and Visualization which was programming in OpenGL to create a 3D scene based on a chosen 2D image.  The plan for this project enhancement was to improve the software design by utilizing more advanced lighting and shadow mapping techniques in order to create a more realistic 3D environment within the OpenGL application. In the current design, it uses the most basic form of lighting model which is Phong (LearnOpenGL). The enhancement introduces Blinn-Phong which is more realistic as well as implementing Shadow Mapping to calculate the ambient occlusions made by physical objects that occlude a light source. 

Repo: https://github.com/FinnishArmy/Computational-Graphics-and-Visualizaiton

<p align="center">
<img alt="image" src="source/GFXdesignBefore.png" width="300" height="300" />
<img alt="image" src="source/GFXdesignAfter.png" width="300" height="300" />
</p>

<h2 align="center"> Enhancement Two - Algorithms and Data Structure </h2>
The origin of this project is from a machine learning course taken in Washington State University.  The purpose of the program is to feed an image through a network and properly identify objects within an image using Python.  I chose to enhance this project as it required advanced knowledge on which post-processing algorithm to utilize and having the ability to pick the highest scoring detections.  I also used it to showcase my ability to highlight the skills on algorithmic optimization.  Finally I chose this project to show my ability on using the right data structures for the right operations to increase efficiency.

Below you can see how the algorithm draws a rectangle around each detect object.

<p align="center">
<img alt="image" src="source/Screenshot 2026-02-02 121607.png" width="600" height="400" />
</p>

Repo: https://github.com/FinnishArmy/ML_Image_Identification

<h2 align="center"> Enhancement Three - Databases </h2>
The purpose of this project was to develop a binary search tree data structure in order to sort through a CSV database.  This was originally completed in Data Structures at SNHU in C++.  I chose this project as it aligns closely with the enhancement topic and to showcase my ability to enable an efficient use of a BST within C++ and to enhance the project by patching security vulnerabilities.  I used various static analysis tools such as Clang-Tidy and ReSharper to reveal possible vulnerabilities within the code base (CSVparser.cpp and BinarySearchTree.cpp).  Once these suggestions were revealed, it was my job to ensure they were not false-positives and to patch the ones that indeed were vulnerabilities or possible enhancements.  One big issue was not having a default clause within a switch-case, this could lead to unexpected behavior (though not in this scenario) if the code was used elsewhere.  Another repeated issue that led to efficiency problems was locations where the parameter was copied for each invocation, this led to an improvement in speed of the BST.

Overall, I think this project showcases my abilities to choose the correct data structure for databases.  Showing my ability to convert a previously implemented Binary Search Tree to a Self-Balancing Binary Search Tree highlights my skills in keeping code modular and working on previously written code.  I also showed my skills in using static code analysis tools like Clang-Tidy to reveal possible code vulnerabilities and patch ones that are not false positives as well as ignoring ones that are false positives.  I also removed many warnings that previously existed in the code from 15+ to only 1 warning that can be safely ignored.  For these reasons I believe this program enhancement matches the course outcomes for Data Structures and Algorithms.

Seen below is the functionality of loading the database and deleting the entry from the database.

<p align="center">
<img alt="image" src="source/menu_1.png" width="300" height="300" />
<img alt="image" src="source/menu_3.png" width="300" height="300" />
</p>


Repo: https://github.com/FinnishArmy/BST_CPP

<h2 align="center"> Self Assessment </h2>
Completing an ePortfolio throughout this final CS499 course has shown me everything I've personally completed. Not only does this help showcase my ability to professionaly represent my skillset as a computer scienstist, but it also showcases to myself what I have accomplished. Being able to complete an informal code review while still keeping a formal tone highlights my skills to verbally and visually deliver coherent and technically sound communications. 

My enhancement one is a representation of my abilities to work on OpenGL in C++ and showcases my skills in software engineering. 