MathJax = {
   tex: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true,
      processEnvironments: true,
      macros: {
         bigO: ["\\operatorname{O}\\!\\left(#1\\right)", 1],
         bigTheta: ["\\operatorname{\\Theta}\\!\\left(#1\\right)", 1]
      }
   }
}