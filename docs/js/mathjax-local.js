window.MathJax = {
  tex: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
    processEscapes: true,
    tags: "ams",
    macros: {
      PR: "\\mathbb{P}",
      EXP: "\\mathbb{E}",
      IND: "\\mathbb{I}",
      ONES: "\\mathbb{1}",
      reals: "\\mathbb{R}",
      integers: "\\mathbb{Z}",
      BLANK: "\\mathfrak{E}",
      TRANS: "\\intercal",
      VEC: "\\operatorname{vec}",
      ROWS: "\\operatorname{vec}",
      TR: "\\operatorname{Tr}",   
      SPAN: "\\operatorname{sp}",   
      ALPHABET: ["\\mathcal{#1}", 1],
      MATRIX: ["\\begin{bmatrix} #1 \\end{bmatrix}", 1],
      NORM: ["\\left\\lVert #1 \\right\\rVert", 1],
      ABS: ["\\left\\lvert #1 \\right\\rvert", 1]
    },
    autoload: {
      color: ['color'],
    },
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
};
