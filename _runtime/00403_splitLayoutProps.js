// _runtime/00403_splitLayoutProps.js

export default function splitLayoutProps(arg0) {
  let outer = null;
  let inner = null;
  if (null != arg0) {
    let obj = {};
    obj = {};
    const _Object = Object;
    const keys = Object.keys(arg0);
    inner = obj;
    outer = obj;
    for (const item10015 of keys) {
      let tmp7 = item10015;
      switch (item10015) {
        case "margin":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "marginHorizontal":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "marginVertical":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "marginBottom":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "marginTop":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "marginLeft":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "marginRight":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "flex":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "flexGrow":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "flexShrink":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "flexBasis":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "alignSelf":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "height":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "minHeight":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "maxHeight":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "width":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "minWidth":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "maxWidth":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "position":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "left":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "right":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "bottom":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "top":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "transform":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "transformOrigin":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "rowGap":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "columnGap":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        case "gap":
          obj[tmp7] = arg0[tmp7];
          continue;
          break;
        default:
          obj[tmp7] = arg0[tmp7];
      }
    }
  }
  return { outer, inner };
}
