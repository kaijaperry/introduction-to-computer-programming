function get_path_to_root(node) {
  let path_to_root = [];
  let parent_node = node.parentNode;
  let current_node = node;

  while (parent_node) {
    path_to_root.unshift(current_node);
    current_node = parent_node;
    parent_node = parent_node.parentNode;
  }
  return path_to_root;
}
