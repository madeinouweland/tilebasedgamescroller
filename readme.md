# Tile based game scroller

Many 8-bit 2D games used a cell based game engine that repeated bitmaps to create massive worlds on systems with limited memory.

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/preview.gif)

The illusion of smooth scrolling large worlds is created by moving the offset of the pixels on the screen. When a discrete amount of pixels have scrolled in X/Y direction, the underlying map data is shifted one character to the right/left/top/bottom and the offset is resetted.

On systems like the C64, the pixel offset was hardware supported. In 2021 you can do this in the browser, like I did here.

Here is the underlying map data:

```
#######################PPPPPPPPPP#######
#ss##ss.,;:.,;:.,;:.,;:.,;:.,;:sPssssps#
#sssss.;,.,.;.;###...:.,;..........ssss#
#s.......:.,;...####.......:.,;......ss#
#s.:.,;......####.......:.,;...:.,;...s#
#s............ssss..:.,;..##.:.,;..:.,;#
#s....:.,;.....:.,;.......##...........#
#s................:.,;...:.,;..ssss:.,;#
#.:.,;....###......:.,;......#####s....#
#.........###p.......:.,;######s.......#
#.........####...:.,;....###ps.........#
#.........................##...........#
#...:.,;.....####.....:.,;........:.,;.#
#.........................##...........#
#.......:.,;....ssps......##.....:.,;..#
#:.,;...........ss.....................#
#sss......###....ss..........#####.....#
#spsss............sss......:.,;........#
#sssspss...........:.,;............:.,;#
########################################
```

The characters represent one of these sprites:

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/water2.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/strand.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/strandmetparasol.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/palm.png)
