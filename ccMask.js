// Function that masks all numbers except the last 4

function maskify(cc) {
    return cc.split('').map((letter, idx) => idx < cc.length - 4 ? '#' : letter).join('');
  }