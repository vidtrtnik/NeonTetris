var res_m_cube;
var res_t_cube;
var m_cube;
var t_cube;

function loadResources(wy) {
  res_m_cube = wy.addResource("res_m_cube", "./models/cube.wy3dm");
  res_t_cube = wy.addResource("res_t_cube", "./textures/cube.wy3dt");
   
  m_cube = new wy3d_Model(res_m_cube);
  t_cube = new wy3d_Texture(res_t_cube);
}
