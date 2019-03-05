\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{template}
\RequirePackage{etex}

\LoadClass[11pt]{article}

\RequirePackage[letterpaper, portrait, headheight = 15pt, top = 1.2in, bottom = 1in, left = 1in, right = 1in]{geometry}
\RequirePackage{subfiles, multicol, empheq, mdframed, tabularx}
\RequirePackage{amsmath, mathtools, tikz, tkz-euclide, polynom}
\RequirePackage{fancyhdr}
\RequirePackage[skins, most]{tcolorbox}
\RequirePackage{hyperref}

\pagestyle{fancy}

\newsavebox{\mysaveboxM}
\newsavebox{\mysaveboxT}

\newenvironment{mdframed_title}[1]
    {\mdfsetup{
        frametitle={\colorbox{white}{\space#1\space}},
        innertopmargin=-5pt,
     frametitleaboveskip=-\ht\strutbox,
    }
    \begin{mdframed}%
    }
    {\end{mdframed}}
    
\input longdiv.tex