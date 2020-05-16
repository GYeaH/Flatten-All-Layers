# Flatten-All-Layers
The idea of this script is turn every layer's visibility on and flatten it with a new created layer moved below target layer.<br>

Script was written based on working layer structure. <br>
One PS file contains several layerset, every layerset contains one or several layers with no sub-layerset:<br>

PS file<br>
  |_ LayerSet_1<br>
&nbsp;&nbsp;|_ layer_1<br>
&nbsp;&nbsp;|_ layer_2<br>
&nbsp;&nbsp;...<br>
  |_ LayerSet_2<br>
&nbsp;&nbsp;|_ layer_1<br>
&nbsp;&nbsp;...<br>
  |_ LayerSet_3<br>
&nbsp;&nbsp;|_ layer_1<br>
&nbsp;&nbsp;...<br>
  .<br>
  .<br>
  .<br>

Currently it has been provide can fit the situation below in my work.<br>
1. Layer's visibility didn't turned on<br>
2. Layer when interior opaticy set to be 0% (shape only have outline)<br>
3. Layer with additional effects<br>

The work progress required to flatten all layers in every Photoshop files. <br>
Extension script currently in Photoshop doesn't really meet the situation in my work. <br>
So I wrote this script and make it in an action to ease my life.
