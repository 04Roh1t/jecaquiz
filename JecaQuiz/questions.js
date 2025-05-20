const quizData = {
  "Machine Learning": [
    {
      q: "Which algorithm is used for supervised learning?",
      options: ["K-Means", "Linear Regression", "Apriori", "DBSCAN"],
      correct: 1
    },
    {
      q: "Which library is popular for deep learning?",
      options: ["NumPy", "Matplotlib", "TensorFlow", "Pandas"],
      correct: 2
    },
    {
      q: "Overfitting can be reduced by?",
      options: ["Using larger models", "Adding more noise", "Regularization", "Removing validation set"],
      correct: 2
    },
    {
      q: "What is the role of a cost function?",
      options: ["To plot graphs", "To measure error", "To save models", "To test accuracy"],
      correct: 1
    },
    {
      q: "Which of these is a classification problem?",
      options: ["Predicting stock price", "Predicting temperature", "Predicting weather type", "Predicting rainfall amount"],
      correct: 2
    }
  ],
  "C": [
    {
      q: "What is the size of an int in C (on a 32-bit system)?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
      correct: 1
    },
    {
      q: "Which of these is a loop structure in C?",
      options: ["if", "switch", "for", "goto"],
      correct: 2
    },
    {
      q: "Which keyword is used to define a constant in C?",
      options: ["let", "const", "#define", "immutable"],
      correct: 2
    },
    {
      q: "What does `scanf` function do?",
      options: ["Prints to console", "Reads input", "Allocates memory", "Compiles code"],
      correct: 1
    },
    {
      q: "Which data type would you use to store a single character?",
      options: ["char", "int", "float", "string"],
      correct: 0
    },
    {
      q: "Which operator is used to access the value at the address in pointers?",
      options: ["&", "*", "%", "$"],
      correct: 1
    },
    {
      q: "Which of the following is a valid variable name in C?",
      options: ["2value", "value_2", "value-2", "value 2"],
      correct: 1
    },
    {
      q: "What is the default return type of `main()` in C?",
      options: ["int", "void", "char", "float"],
      correct: 0
    },
    {
      q: "Which of the following is not a valid C storage class?",
      options: ["auto", "static", "register", "manual"],
      correct: 3
    },
    {
      q: "What is the result of 5/2 in C (integer division)?",
      options: ["2.5", "2", "2.0", "3"],
      correct: 1
    }
  ],
   "Computer Architecture": [
    {
      q: "What does CPU stand for?",
      options: ["Central Processing Unit", "Central Program Unit", "Central Print Unit", "Control Processing Unit"],
      correct: 0
    },
    {
      q: "Which component performs arithmetic and logical operations?",
      options: ["CU", "RAM", "ALU", "ROM"],
      correct: 2
    },
    {
      q: "Which memory is volatile?",
      options: ["ROM", "RAM", "Hard Disk", "Flash"],
      correct: 1
    },
    {
      q: "The speed of a CPU is measured in?",
      options: ["Hz", "Mbps", "dpi", "GB"],
      correct: 0
    },
    {
      q: "Which register holds the address of the next instruction?",
      options: ["MAR", "IR", "PC", "MBR"],
      correct: 2
    },
    {
      q: "What is pipelining in CPU?",
      options: ["Running programs simultaneously", "Dividing tasks into stages", "Slowing down execution", "Memory segmentation"],
      correct: 1
    },
    {
      q: "Which is not a type of cache memory?",
      options: ["L1", "L2", "L3", "L4"],
      correct: 3
    },
    {
      q: "What is the function of the control unit?",
      options: ["Performs calculations", "Manages memory", "Directs operations", "Stores data"],
      correct: 2
    },
    {
      q: "Which bus carries data between CPU and memory?",
      options: ["Address bus", "Control bus", "Data bus", "Power bus"],
      correct: 2
    },
    {
      q: "Which is a RISC processor?",
      options: ["Intel i9", "AMD Ryzen", "ARM Cortex", "Intel Pentium"],
      correct: 2
    }
  ],
  "Java": [
    {
      q: "Which keyword is used to inherit a class in Java?",
      options: ["super", "this", "extends", "implements"],
      correct: 2
    },
    {
      q: "Which method is the entry point of a Java program?",
      options: ["start()", "main()", "init()", "run()"],
      correct: 1
    },
    {
      q: "Which of these is not a primitive data type in Java?",
      options: ["int", "float", "String", "char"],
      correct: 2
    },
    {
      q: "What is the default value of a boolean variable?",
      options: ["true", "false", "0", "null"],
      correct: 1
    },
    {
      q: "Which of the following is used to handle exceptions in Java?",
      options: ["try-catch", "throw", "throws", "All of the above"],
      correct: 3
    },
    {
      q: "Which package contains the Scanner class?",
      options: ["java.io", "java.net", "java.util", "java.awt"],
      correct: 2
    },
    {
      q: "Which operator is used for comparison in Java?",
      options: ["=", "==", "!", "&&"],
      correct: 1
    },
    {
      q: "What is JVM?",
      options: ["Java Variable Machine", "Java Virtual Machine", "Joint Virtual Model", "Java Visual Method"],
      correct: 1
    },
    {
      q: "What is method overloading?",
      options: ["Using the same method name with different parameters", "Using multiple classes", "Creating abstract methods", "Using more than one return type"],
      correct: 0
    },
    {
      q: "Which access modifier makes a variable accessible within the same package?",
      options: ["public", "private", "protected", "default"],
      correct: 3
    }
  ],
"Data Structure": [
  {
    q: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correct: 1
  },
  {
    q: "What is the time complexity to search an element in a balanced binary search tree?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: 2
  },
  {
    q: "Which data structure is used in BFS (Breadth First Search)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correct: 1
  },
  {
    q: "Which sorting algorithm is the fastest on average?",
    options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
    correct: 2
  },
  {
    q: "Which data structure is best suited for implementing recursion?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    correct: 1
  },
  {
    q: "In a max-heap, the parent node is always:",
    options: ["Smaller than children", "Equal to children", "Greater than children", "Unrelated to children"],
    correct: 2
  },
  {
    q: "Which traversal method visits nodes in the order: left, root, right?",
    options: ["Preorder", "Postorder", "Inorder", "Level-order"],
    correct: 2
  },
  {
    q: "A queue follows which order?",
    options: ["LIFO", "FIFO", "Random", "Sorted"],
    correct: 1
  },
  {
    q: "Which of these data structures uses pointers for connecting elements?",
    options: ["Array", "Stack", "Queue", "Linked List"],
    correct: 3
  },
  {
    q: "What is the time complexity to access an element in an array by index?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    correct: 2
  }
],"Python": [
  {
    q: "Which keyword is used to define a function in Python?",
    options: ["func", "function", "def", "define"],
    correct: 2
  },
  {
    q: "What is the output of: print(2 ** 3)?",
    options: ["6", "8", "9", "5"],
    correct: 1
  },
  {
    q: "Which data type is immutable in Python?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    correct: 3
  },
  {
    q: "What does the len() function do?",
    options: ["Returns size in bytes", "Returns length of object", "Prints a list", "Creates a loop"],
    correct: 1
  },
  {
    q: "Which of these is a correct way to create a list?",
    options: ["list = (1,2,3)", "list = [1,2,3]", "list = {1,2,3}", "list = <1,2,3>"],
    correct: 1
  },
  {
    q: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/* */", "<!-- -->"],
    correct: 1
  },
  {
    q: "Which method can be used to convert a string to lowercase?",
    options: ["lower()", "tolower()", "strlower()", "string.lowercase()"],
    correct: 0
  },
  {
    q: "Which loop is not available in Python?",
    options: ["for", "while", "do-while", "None of the above"],
    correct: 2
  },
  {
    q: "How do you insert COMMENTS in Python code?",
    options: ["// this is a comment", "# this is a comment", "-- this is a comment", "/* this is a comment */"],
    correct: 1
  },
  {
    q: "Which function is used to get input from a user?",
    options: ["get()", "read()", "input()", "scan()"],
    correct: 2
  }
],
"Operating System": [
  {
    q: "Which of the following is not a function of an operating system?",
    options: ["Memory management", "Compiler design", "Process management", "Device management"],
    correct: 1
  },
  {
    q: "Which scheduling algorithm gives the minimum average waiting time?",
    options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
    correct: 1
  },
  {
    q: "What is a deadlock?",
    options: ["An infinite loop", "A type of virus", "A state where processes wait indefinitely", "A system reboot"],
    correct: 2
  },
  {
    q: "Which of the following is a non-preemptive scheduling algorithm?",
    options: ["Round Robin", "SJF", "FCFS", "Priority"],
    correct: 2
  },
  {
    q: "What is the purpose of a page table in virtual memory?",
    options: ["Store user data", "Translate logical to physical addresses", "Handle I/O devices", "Manage CPU scheduling"],
    correct: 1
  },
  {
    q: "Which command is used to list processes in UNIX/Linux?",
    options: ["list", "ps", "jobs", "proc"],
    correct: 1
  },
  {
    q: "What is thrashing in OS?",
    options: ["Heavy use of CPU", "Swapping of processes too frequently", "Data corruption", "Memory leak"],
    correct: 1
  },
  {
    q: "Which of the following is a type of real-time operating system?",
    options: ["Windows 10", "Linux", "VxWorks", "macOS"],
    correct: 2
  },
  {
    q: "Which memory allocation technique suffers from external fragmentation?",
    options: ["Paging", "Segmentation", "Contiguous allocation", "None of the above"],
    correct: 2
  },
  {
    q: "What does the 'init' process do in UNIX systems?",
    options: ["Handles file operations", "Starts up the OS", "Manages memory", "Schedules tasks"],
    correct: 1
  }
],
"Software Engineering": [
  {
    q: "Which of the following is not a software development life cycle (SDLC) model?",
    options: ["Waterfall", "Agile", "Spiral", "Blueprint"],
    correct: 3
  },
  {
    q: "What is the first phase of the SDLC?",
    options: ["Design", "Coding", "Requirement Analysis", "Testing"],
    correct: 2
  },
  {
    q: "Which model is best suited for small projects with well-defined requirements?",
    options: ["Agile", "Waterfall", "RAD", "Spiral"],
    correct: 1
  },
  {
    q: "Which one is not a software quality attribute?",
    options: ["Maintainability", "Portability", "Reliability", "Electricity"],
    correct: 3
  },
  {
    q: "What is the purpose of software testing?",
    options: ["Improve UI", "Find bugs", "Reduce costs", "Increase speed"],
    correct: 1
  },
  {
    q: "Which diagram is used in UML to model dynamic behavior?",
    options: ["Class diagram", "Activity diagram", "Component diagram", "Deployment diagram"],
    correct: 1
  },
  {
    q: "Who is responsible for managing software requirements?",
    options: ["Tester", "Developer", "Project Manager", "Business Analyst"],
    correct: 3
  },
  {
    q: "Which of the following is a black-box testing method?",
    options: ["Unit testing", "Integration testing", "System testing", "Code review"],
    correct: 2
  },
  {
    q: "Which document describes what the software will do and how it will be expected to perform?",
    options: ["Design Document", "SRS", "User Manual", "Test Case"],
    correct: 1
  },
  {
    q: "What is the full form of CASE in software engineering?",
    options: ["Computer-Aided Software Engineering", "Complex Algorithm Software Engineering", "Component Analysis and System Engineering", "Code and Software Execution"],
    correct: 0
  }
],
"Internet Technology": [
  {
    q: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Mark Language"],
    correct: 1
  },
  {
    q: "Which protocol is used to send email?",
    options: ["HTTP", "SMTP", "FTP", "SNMP"],
    correct: 1
  },
  {
    q: "Which tag is used to insert a line break in HTML?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correct: 1
  },
  {
    q: "What is the default port for HTTP?",
    options: ["21", "80", "23", "443"],
    correct: 1
  },
  {
    q: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    correct: 2
  },
  {
    q: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Resource List", "Uniform Request Locator", "Universal Reference Link"],
    correct: 0
  },
  {
    q: "Which of the following is a client-side scripting language?",
    options: ["PHP", "Python", "JavaScript", "Perl"],
    correct: 2
  },
  {
    q: "Which protocol is used to securely browse websites?",
    options: ["HTTP", "FTP", "HTTPS", "TCP"],
    correct: 2
  },
  {
    q: "What is the main purpose of DNS?",
    options: ["Translate domain names to IP addresses", "Transfer emails", "Secure websites", "Host web servers"],
    correct: 0
  },
  {
    q: "Which of the following is not a web browser?",
    options: ["Chrome", "Firefox", "Edge", "Linux"],
    correct: 3
  }
],
"Cyber Security": [
  {
    q: "What does the acronym 'CIA' stand for in cyber security?",
    options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Control, Investigation, Access", "Cybersecurity Investigation Agency"],
    correct: 1
  },
  {
    q: "Which of the following is a type of malware?",
    options: ["Firewall", "Antivirus", "Trojan Horse", "HTTPS"],
    correct: 2
  },
  {
    q: "Phishing is:",
    options: ["An encryption method", "A firewall type", "A social engineering attack", "A secure communication protocol"],
    correct: 2
  },
  {
    q: "What is the primary function of a firewall?",
    options: ["Encrypt data", "Scan for malware", "Monitor network traffic", "Block unauthorized access"],
    correct: 3
  },
  {
    q: "Which protocol is used for secure communication over the internet?",
    options: ["FTP", "HTTP", "SMTP", "HTTPS"],
    correct: 3
  },
  {
    q: "What does ransomware do?",
    options: ["Steals login credentials", "Slows down the system", "Encrypts files and demands payment", "Deletes system files"],
    correct: 2
  },
  {
    q: "Which one is not a strong password practice?",
    options: ["Using uppercase and lowercase letters", "Using '123456'", "Including special characters", "Using a combination of letters and numbers"],
    correct: 1
  },
  {
    q: "A DDoS attack is meant to:",
    options: ["Hack into databases", "Steal login credentials", "Overwhelm a server with traffic", "Spy on user activity"],
    correct: 2
  },
  {
    q: "Which of the following is used to detect unauthorized access?",
    options: ["Antivirus", "Firewall", "Intrusion Detection System (IDS)", "Router"],
    correct: 2
  },
  {
    q: "Multi-factor authentication (MFA) improves security by:",
    options: ["Using firewalls", "Verifying identity through multiple methods", "Hiding IP address", "Encrypting the entire network"],
    correct: 1
  }
],
"Cloud Computing": [
  {
    q: "What is cloud computing?",
    options: ["Local computing", "On-demand availability of computing resources", "Gaming over the internet", "Computer assembly"],
    correct: 1
  },
  {
    q: "Which of these is a cloud service model?",
    options: ["HTTP", "HTML", "IaaS", "VPN"],
    correct: 2
  },
  {
    q: "What does SaaS stand for?",
    options: ["Software as a System", "Service as a Software", "Software as a Service", "System as a Software"],
    correct: 2
  },
  {
    q: "Which of the following is a benefit of cloud computing?",
    options: ["High upfront cost", "Manual scaling", "On-demand resource availability", "Fixed hardware setup"],
    correct: 2
  },
  {
    q: "Which company provides AWS cloud services?",
    options: ["Microsoft", "Google", "IBM", "Amazon"],
    correct: 3
  },
  {
    q: "What is virtualization in cloud computing?",
    options: ["Creating physical servers", "Running programs remotely", "Creating a virtual version of a resource", "Eliminating hardware"],
    correct: 2
  },
  {
    q: "Which type of cloud is shared among several organizations?",
    options: ["Private cloud", "Public cloud", "Hybrid cloud", "Community cloud"],
    correct: 3
  },
  {
    q: "Which cloud model offers hardware resources as a service?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correct: 0
  },
  {
    q: "Google Cloud Platform is an example of:",
    options: ["Local server", "Cloud service provider", "Router technology", "Antivirus software"],
    correct: 1
  },
  {
    q: "Which of the following refers to cloud deployment over the internet?",
    options: ["Private Cloud", "Community Cloud", "Public Cloud", "Personal Cloud"],
    correct: 2
  }
],
  "Ai": [
    {
      q: "What does AI stand for?",
      options: ["Automated Input", "Artificial Intelligence", "Automatic Interface", "Applied Innovation"],
      correct: 1
    },
    {
      q: "Which of these is an application of AI?",
      options: ["Facial recognition", "Weather forecasting", "Word processing", "Spreadsheet management"],
      correct: 0
    },
    {
      q: "Which language is commonly used for AI programming?",
      options: ["HTML", "Python", "CSS", "SQL"],
      correct: 1
    },
    {
      q: "What is Machine Learning?",
      options: ["Learning how machines work", "Programming robots", "A method to allow machines to learn from data", "Fixing computer bugs"],
      correct: 2
    },
    {
      q: "Which of the following is a popular AI model?",
      options: ["GPT", "RAM", "ROM", "CPU"],
      correct: 0
    },
    {
      q: "Which field is most closely related to AI?",
      options: ["Biology", "Astrology", "Computer Science", "History"],
      correct: 2
    },
    {
      q: "What is an example of Natural Language Processing (NLP)?",
      options: ["Sorting files", "Speech-to-text conversion", "Rendering graphics", "Playing music"],
      correct: 1
    },
    {
      q: "Which AI concept involves making decisions based on rules and logic?",
      options: ["Neural networks", "Expert systems", "Clustering", "Evolutionary algorithms"],
      correct: 1
    },
    {
      q: "What is a neural network modeled after?",
      options: ["Electrical grids", "The human brain", "Solar systems", "Computer chips"],
      correct: 1
    },
    {
      q: "Which company developed the AI model GPT?",
      options: ["Google", "Facebook", "Microsoft", "OpenAI"],
      correct: 3
    }
  ],
  "Soft Computing" : [
    {
      q: "What is Soft Computing primarily used for?",
      options: ["Precision mathematics", "Complex problem solving with uncertainty", "Hardware optimization", "Compiler design"],
      correct: 1
    },
    {
      q: "Which of the following is NOT a component of Soft Computing?",
      options: ["Fuzzy Logic", "Genetic Algorithms", "Neural Networks", "Boolean Algebra"],
      correct: 3
    },
    {
      q: "Fuzzy Logic deals with?",
      options: ["Binary values", "Exact reasoning", "Approximate reasoning", "Digital circuits"],
      correct: 2
    },
    {
      q: "Which algorithm is inspired by natural selection?",
      options: ["Backpropagation", "Gradient Descent", "Genetic Algorithm", "Support Vector Machine"],
      correct: 2
    },
    {
      q: "Which computing technique mimics the human brain?",
      options: ["Fuzzy Logic", "Neural Networks", "Genetic Algorithms", "Rule-based Systems"],
      correct: 1
    },
    {
      q: "What is the main idea of a neural network?",
      options: ["Sequential execution", "Symbolic processing", "Learning from data", "Exact inference"],
      correct: 2
    },
    {
      q: "Which component of soft computing is best suited for optimization problems?",
      options: ["Neural Networks", "Fuzzy Logic", "Genetic Algorithms", "Turing Machine"],
      correct: 2
    },
    {
      q: "Fuzzy sets are characterized by?",
      options: ["Crisp boundaries", "Probabilistic measures", "Membership functions", "Logical operators"],
      correct: 2
    },
    {
      q: "Which method is used to adjust weights in neural networks?",
      options: ["Hill climbing", "Crossover", "Mutation", "Backpropagation"],
      correct: 3
    },
    {
      q: "Soft Computing techniques are mostly used in?",
      options: ["Web development", "Scientific computing", "Decision support systems", "Operating systems"],
      correct: 2
    }
  ]
};


