// _runtime/00446_isScrollableNode.js

export default function isScrollableNode(nodeName) {
  return "RN:ScrollView" === nodeName.nodeName;
}
