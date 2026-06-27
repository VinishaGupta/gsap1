// gsap.to(".box",
//     {x:500,
//     duration:2,

//     }
// )


// Exercise 1 — Move right ➡️

// Make box move 600px right in 3 seconds.


// gsap.to(".box",
//     {
//         duration:3,
//         x:600
//     }
// )


// Exercise 2 — Move diagonally ↘️

// Move:

// right 400px
// down 300px


// gsap.to(".box",
//    { x:400,
//     y:300}
// )


// Exercise 3 — Rotate + move 🔄

// Make the box:

// move right 500px
// rotate 2 full circles
// take 2 seconds

// gsap.to(".box",
//    {
//     x:500,
//     rotation:720,
//     duration:2
//    } 
// )

// Exercise 4 — Grow bigger 📦

// Animate:

// Normal:

// ⬛

// After animation:

// ⬛⬛
// ⬛⬛

// Use:

// scale:


// gsap.to(".box",
//     {
//         scale:3
//     }
// )

// Exercise 5 — Disappear 👻

// Make box slowly disappear in 4 seconds.

// Learn:

// opacity:

// gsap.to(".box",
//     {
//         opacity:0,
//         duration:4
//     }
// )


// Exercise 6 — Combine everything 🔥

// Make the box:

// move right 500px
// move down 200px
// rotate once
// become 2x bigger
// fade halfway

// // All in ONE gsap.to().

// gsap.to(".box",
//     {
//         x:500,
//         y:200,
//         rotation:360,
//         scale:2,
//         opacity:0.5,
//         duration:5
//     }
// )



// Exercise 7 — Delay ⏰

// Wait 2 seconds before animation starts.

// Expected:

// (wait...)
// 2 sec later
// box moves

// Learn:

// delay:

// gsap.to(".box", 
//     {
//         delay:2,
//         x:500,
//         rotate:720
//     }
// )

// Exercise 8 — Infinite animation ♾️

// Make box move left-right forever.

// Learn:

// repeat:
// yoyo:

// Goal:

// 🟪 → → → 
//      ← ← ← 🟪

// gsap.to(".box",
//     {
//         x:500,
//         yoyo:true,
//         repeat:-1
//     }
// )