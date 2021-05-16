hljs.highlightAll();

function setTheme(themeName) {
   localStorage.setItem('theme', themeName);
   document.documentElement.className = themeName;
}

function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
   } else {
      setTheme('theme-dark');
   }
}

(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
   } else {
      setTheme('theme-light');
   }
})();

function draw_array(A, id, label = 0, bordercolor) {
   let newMainSpan = document.createElement('span');
   newMainSpan.setAttribute('class', 'array');

   if (label != 0) {
      let nameSpan = document.createElement('span');
      nameSpan.innerHTML = label;
      nameSpan.setAttribute('style', 'display: flex; align-items: center');

      if (A.length == 0) {
         nameSpan.innerHTML = label + "pusty";
      }

      newMainSpan.appendChild(nameSpan);
   }

   for (let j = 0; j < A.length; ++j) { // important let, avoids name conflicts with other scripts in the HTML, was hard to debug when missing
      let newSpan = document.createElement('span');
      newSpan.setAttribute('class', 'array-element');

      if (bordercolor != undefined) {
         newSpan.setAttribute('style', 'border: 2px solid ' + bordercolor + ';');
      }

      if (j == 0 && label != 0) {
         newSpan.style.marginLeft = "6px";
      }
      
      newSpan.innerHTML = A[j];
      newMainSpan.appendChild(newSpan);
   }

   document.getElementById(id).appendChild(newMainSpan);
}

function draw_two_arrays(A, B, id, label1, label2, bc1, bc2) {
   draw_array(A, id, label1, bc1);
   draw_array(B, id, label2, bc2);
}

function draw_three_arrays(A, B, C, id, label1, label2, label3, bc1, bc2, bc3) {
   draw_array(A, id, label1, bc1);
   draw_array(B, id, label2, bc2);
   draw_array(C, id, label3, bc3);
   document.getElementById(id).appendChild(document.createElement('br'));
}

function draw_2d_array(A, id, x, y) {
   for (let j = 0; j <= y; ++j) {
      let arr = [];

      for (let i = 0; i <= x; ++i) {
         arr[i] = A[(x + 1) * j + i];
      }

      draw_array(arr, id);
   }
   document.getElementById(id).appendChild(document.createElement('br'));
}