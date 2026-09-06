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
      switch (item10015) {
        case "margin":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "marginHorizontal":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "marginVertical":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "marginBottom":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "marginTop":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "marginLeft":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "marginRight":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "flex":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "flexGrow":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "flexShrink":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "flexBasis":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "alignSelf":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "height":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "minHeight":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "maxHeight":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "width":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "minWidth":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "maxWidth":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "position":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "left":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "right":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "bottom":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "top":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "transform":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "transformOrigin":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "rowGap":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "columnGap":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        case "gap":
          obj[item10015] = arg0[item10015];
          continue;
          break;
        default:
          obj[item10015] = arg0[item10015];
      }
    }
  }
  return { outer, inner };
}
