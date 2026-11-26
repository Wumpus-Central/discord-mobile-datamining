// discord_app/design/components/AnimatedAsset/AnimatedAssetSelection.tsx
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = { renderer: "poster" };
let closure_1 = { webm: "video/webm", mp4: "video/mp4", hevc: 'video/mp4; codecs="hvc1"' };
const result = size.fileFinishedImporting("design/components/AnimatedAsset/AnimatedAssetSelection.tsx");

export function selectFormats(asset, arg1) {
  if (asset.hasAlpha) {
    if ("chromium" !== arg1) {
      if ("firefox" !== arg1) {
        if ("safari" !== arg1) {
          if ("ios" !== arg1) {
            if ("android" === arg1) {
              const webpSizes = asset.webpSizes;
              let num3;
              if (webpSizes != null) {
                num3 = webpSizes.length;
              }
              if (num3 == null) {
                num3 = 0;
              }
              let tmp6 = null;
              if (num3 > 0) {
                const obj2 = { renderer: "image", formats: ["webp"] };
                tmp6 = obj2;
              }
              if (tmp6 == null) {
                tmp6 = asset;
              }
              return tmp6;
            }
          }
        }
        items = ["hevc"];
        const found = items.filter((item) => {
          if ("webm" === item) {
            let hevcUrl = asset.webmUrl;
          } else if ("mp4" === item) {
            hevcUrl = asset.mp4Url;
          } else if ("hevc" === item) {
            hevcUrl = asset.hevcUrl;
          }
          return null != hevcUrl;
        });
        let tmp8 = null;
        if (found.length > 0) {
          const obj3 = { renderer: "video", formats: found };
          tmp8 = obj3;
        }
        if (tmp8 == null) {
          const webpSizes1 = asset.webpSizes;
          let num6;
          if (webpSizes1 != null) {
            num6 = webpSizes1.length;
          }
          if (num6 == null) {
            num6 = 0;
          }
          let tmp9 = null;
          if (num6 > 0) {
            const obj4 = { renderer: "image", formats: ["webp"] };
            tmp9 = obj4;
          }
          tmp8 = tmp9;
        }
        if (tmp8 == null) {
          tmp8 = asset;
        }
        return tmp8;
      }
    }
    const items1 = ["webm"];
    const found1 = items1.filter((item) => {
      if ("webm" === item) {
        let hevcUrl = asset.webmUrl;
      } else if ("mp4" === item) {
        hevcUrl = asset.mp4Url;
      } else if ("hevc" === item) {
        hevcUrl = asset.hevcUrl;
      }
      return null != hevcUrl;
    });
    let tmp11 = null;
    if (found1.length > 0) {
      const obj5 = { renderer: "video", formats: found1 };
      tmp11 = obj5;
    }
    if (tmp11 == null) {
      tmp11 = asset;
    }
    return tmp11;
  }
  if ("ios" === arg1) {
    const items2 = ["mp4"];
    const found2 = items2.filter((item) => {
      if ("webm" === item) {
        let hevcUrl = asset.webmUrl;
      } else if ("mp4" === item) {
        hevcUrl = asset.mp4Url;
      } else if ("hevc" === item) {
        hevcUrl = asset.hevcUrl;
      }
      return null != hevcUrl;
    });
    let tmp4 = null;
    if (found2.length > 0) {
      const obj6 = { renderer: "video", formats: found2 };
      tmp4 = obj6;
    }
    if (tmp4 == null) {
      tmp4 = asset;
    }
    return tmp4;
  } else {
    const items3 = ["webm", "mp4"];
    const found3 = items3.filter((item) => {
      if ("webm" === item) {
        let hevcUrl = asset.webmUrl;
      } else if ("mp4" === item) {
        hevcUrl = asset.mp4Url;
      } else if ("hevc" === item) {
        hevcUrl = asset.hevcUrl;
      }
      return null != hevcUrl;
    });
    let tmp2 = null;
    if (found3.length > 0) {
      const obj = { renderer: "video", formats: found3 };
      tmp2 = obj;
    }
    if (tmp2 == null) {
      tmp2 = asset;
    }
    return tmp2;
  }
}
export function pickWebpSize(arr, arg1) {
  closure_0 = arg1;
  let found = arr.find((width) => width.width >= closure_0);
  if (found == null) {
    found = arr.at(-1);
  }
  return found;
}
export function getVideoFormatUrl(webmUrl, arg1) {
  if ("webm" === arg1) {
    return webmUrl.webmUrl;
  } else if ("mp4" === arg1) {
    return webmUrl.mp4Url;
  } else {
    return "hevc" === arg1 ? webmUrl.hevcUrl : undefined;
  }
}
export function getVideoFormatMimeType(arg0) {
  return closure_1[arg0];
}
