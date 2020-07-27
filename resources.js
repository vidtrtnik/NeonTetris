var m_cube;
var t_cube;

function loadResources(wy) {
  m_cube = new wy3d_Model(wy, "./models/cube.wy3dm");
  t_cube = new wy3d_Texture(wy, "./textures/cube.wy3dt");
}
