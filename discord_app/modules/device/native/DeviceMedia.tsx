// === Module 10388: DeviceMedia ===

// Module 10388 (DeviceMedia)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import getDeviceMediaPhotosDefault from "getDeviceMediaPhotos" /* 10389 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let dependencyMap, page;

const AnalyticEvents = Constants.AnalyticEvents;
let state = module_570.create(() => ({ assets: null, page: 0, hasReachedEnd: false, lastAssetIndex: 0 }));
let obj = {
  getNextAssetPage(arg0) {
    let batchSize;
    let extensions;
    let tmp2;
    dependencyMap = undefined;
    ({ batchSize, extensions } = arg0);
    state = state.getState();
    let assets = state.assets;
    let lastAssetIndex = state.lastAssetIndex;
    if (null != assets) {
      if (!state.hasReachedEnd) {
        let image;
        let num = 1;
        if (assets.edges[assets.edges.length - 1] != null) {
          const node = tmp4.node;
          if (node != null) {
            image = node.image;
          }
        }
        let obj = assets(1369);
        if (!obj.isIOS()) {
          dependencyMap = tmp2 + 1;
          let obj2 = {
            batchSize,
            endCursor: tmp3,
            lastAssetIndex,
            lastNodeImageUri: image.uri,
            extensions,
            onFetched(edges) {
                    let closure_2;
                    assets = edges;
                    let num;
                    const tmp2 = lastAssetIndex;
                    if (edges != null) {
                      edges = edges.edges;
                      if (edges != null) {
                        num = edges.length;
                      }
                    }
                    if (num == null) {
                      num = 0;
                    }
                    lastAssetIndex = tmp2 + num;
                    if (null != assets) {
                      if (edges != null) {
                        const edges1 = edges.edges;
                        if (edges1 != null) {
                          const unshift = edges1.unshift;
                          const items = [];
                          HermesBuiltin.arraySpread(items, tmp3.edges, 0);
                          HermesBuiltin.apply(unshift, items, edges1);
                        }
                      }
                    }
                    let obj = assets(page[3]);
                    obj.batchUpdates(() => {
                      let end_cursor;
                      const obj = { assets, page, lastAssetIndex, endCursor: end_cursor };
                      end_cursor = undefined;
                      const setState = state.setState;
                      if (assets != null) {
                        const page_info = assets.page_info;
                        if (page_info != null) {
                          end_cursor = page_info.end_cursor;
                        }
                      }
                      setState(obj);
                    });
                    let tmp13 = null == edges;
                    const tmp10 = assets;
                    if (!tmp13) {
                      tmp13 = 0 === edges.edges.length;
                    }
                    if (!tmp13) {
                      let page_info = edges.page_info;
                      let has_next_page;
                      if (page_info != null) {
                        has_next_page = page_info.has_next_page;
                      }
                      tmp13 = false === has_next_page;
                    }
                    page = tmp13;
                    if (page) {
                      const tmp10Result = tmp10(page[3]);
                      tmp10Result.batchUpdates(() => {
                        const obj = { hasReachedEnd };
                        return state.setState(obj);
                      });
                    }
                    const obj2 = { page, has_reached_end: tmp13 };
                    const obj3 = lastAssetIndex(page[2]);
                    obj3.track(constants.MEDIA_PICKER_INFINITE_SCROLL_PAGED, obj2);
                  }
          };
          lastAssetIndex(10389)(obj2);
        }
      }
    }
  },
  refreshAssets(batchSize) {
    batchSize = batchSize.batchSize;
    let obj = {
      batchSize,
      extensions: batchSize.extensions,
      onFetched(edges) {
        let length;
        const assets = edges;
        let num;
        if (edges != null) {
          edges = edges.edges;
          num = edges.filter((node) => {
            let uri;
            if (node != null) {
              node = node.node;
              if (node != null) {
                const image = node.image;
                if (image != null) {
                  uri = image.uri;
                }
              }
            }
            let tmp2 = null == uri;
            if (!tmp2) {
              let uri1;
              if (node != null) {
                const node2 = node.node;
                if (node2 != null) {
                  const image2 = node2.image;
                  if (image2 != null) {
                    uri1 = image2.uri;
                  }
                }
              }
              tmp2 = "" === uri1;
            }
            return tmp2;
          }).length;
        }
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          let obj = { num_broken_assets: num, num_assets: length, location: "DeviceMedia.applyStateUpdate" };
          length = undefined;
          const track = AnalyticsUtilsDefault.track;
          const MEDIA_PICKER_ASSETS_DEBUG = constants.MEDIA_PICKER_ASSETS_DEBUG;
          AnalyticsUtilsDefault;
          if (edges != null) {
            const edges1 = edges.edges;
            if (edges1 != null) {
              length = edges1.length;
            }
          }
          track(MEDIA_PICKER_ASSETS_DEBUG, obj);
        }
        const obj2 = batchSize(dependencyMap[3]);
        obj2.batchUpdates(() => {
          let end_cursor;
          let num;
          const obj = { assets, page: 0, lastAssetIndex: batchSize, endCursor: end_cursor, hasReachedEnd: !num };
          end_cursor = undefined;
          setState = setState.setState;
          if (assets != null) {
            const page_info = assets.page_info;
            if (page_info != null) {
              end_cursor = page_info.end_cursor;
            }
          }
          num = undefined;
          if (assets != null) {
            const page_info2 = assets.page_info;
            if (page_info2 != null) {
              num = page_info2.has_next_page;
            }
          }
          if (num == null) {
            num = 1;
          }
          setState(obj);
        });
      }
    };
    getDeviceMediaPhotosDefault(obj);
  },
  useAssets() {
    return state((assets) => assets.assets);
  },
  useHasReachedEnd() {
    return state((hasReachedEnd) => hasReachedEnd.hasReachedEnd);
  }
};
const result = size.fileFinishedImporting("modules/device/native/DeviceMedia.tsx");

export default obj;