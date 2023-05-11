function rgb(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');
    return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
  }
console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0,0,0));
console.log(rgb(148, 0, 211));
