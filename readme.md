# Tile based game scroller

Many 8-bit 2D games used a cell based game engine that repeated bitmaps to create massive worlds on systems with limited memory.

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/preview.gif)

The illusion of smooth scrolling large worlds can be created by moving the offset of the pixels on the screen. When a discrete amount of pixels have scrolled in X/Y direction, the underlying map data is shifted one character to the right/left/top/bottom and the offset is resetted.

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

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/strand.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/strandmetparasol.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/palm.png)

## Water

The water is a special case. I rotate the characters .,:; and they represent the following water animation:

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/water2.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/water3.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/water4.png)

![map](https://github.com/madeinouweland/tilebasedgamescroller/blob/master/src/assets/water5.png)

I never created a scrolling game on my C64 but I guess this would be how they did it in the eighties.

I hope this helps you to create a nice tile based game!
