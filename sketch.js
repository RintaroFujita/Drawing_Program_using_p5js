let saveCount = 0;

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255);
  
  // points配列をリセットし、新たなランダムな場所に10個の点を生成
  let points = [];
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    points.push(createVector(x, y));
  }

  // ベジエ曲線で連続する点を繋ぐ
  for (let i = 0; i < points.length - 1; i++) {
    let p1 = points[i];
    let p2 = points[i + 1];

    // 制御点を設定
    let cp1 = createVector(p1.x + random(-50, 50), p1.y + random(-50, 50)); // 最初の制御点
    let cp2 = createVector(p2.x + random(-50, 50), p2.y + random(-50, 50)); // 2番目の制御点

    // ベジエ曲線を描画
    stroke(0);
    strokeWeight(10);
    bezier(p1.x, p1.y, cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
  }

  // ユニークなファイル名を生成
  let timestamp = Date.now();
  save(`image_${timestamp}.jpg`);
  saveCount++;

  // 100枚保存したら描画を停止
  if (saveCount >= 100) {
    noLoop();
  }
}
