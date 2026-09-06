// === Module 10644: DeviceMedia ===

// Module 10644 (DeviceMedia)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import getDeviceMediaPhotosDefault from "getDeviceMediaPhotos" /* 10645 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let state = module_560.create(() => ({ assets: null, page: 0, hasReachedEnd: false, lastAssetIndex: 0 }));
const result = size.fileFinishedImporting("modules/device/native/DeviceMedia.tsx");

export default {
  getNextAssetPage(arg0) {
    dependencyMap = undefined;
    ({ batchSize, extensions } = arg0);
    state = state.getState();
    let assets = state.assets;
    let lastAssetIndex = state.lastAssetIndex;
    if (null != assets) {
      if (!state.hasReachedEnd) {
        if (assets.edges[assets.edges.length - 1] != null) {
          const node = tmp4.node;
          if (node != null) {
            const image = node.image;
          }
        }
        let obj = assets(1115);
        if (!obj.isIOS()) {
          dependencyMap = tmp2 + 1;
          obj = {
            batchSize,
            endCursor: tmp3,
            lastAssetIndex,
            lastNodeImageUri: image.uri,
            extensions,
            onFetched(edges) {
                    assets = edges;
                    let num;
                    if (edges != null) {
                      edges = edges.edges;
                      if (edges != null) {
                        num = edges.length;
                      }
                    }
                    if (num == null) {
                      num = 0;
                    }
                    lastAssetIndex = lastAssetIndex + num;
                    if (null != assets) {
                      if (edges != null) {
                        const edges1 = edges.edges;
                        if (edges1 != null) {
                          const unshift = edges1.unshift;
                          const items = [];
                          HermesBuiltin.arraySpread(tmp2.edges, 0);
                          HermesBuiltin.apply(items, edges1);
                        }
                      }
                    }
                    let obj = assets(page[3]);
                    obj.batchUpdates(() => {
                      const obj = { assets, page, lastAssetIndex, endCursor: null };
                      let end_cursor;
                      if (assets != null) {
                        const page_info = assets.page_info;
                        if (page_info != null) {
                          end_cursor = page_info.end_cursor;
                        }
                      }
                      obj.endCursor = end_cursor;
                      closure_4.setState(obj);
                    });
                    let tmp12 = null == edges;
                    if (!tmp12) {
                      tmp12 = 0 === edges.edges.length;
                    }
                    if (!tmp12) {
                      let page_info = edges.page_info;
                      let has_next_page;
                      if (page_info != null) {
                        has_next_page = page_info.has_next_page;
                      }
                      tmp12 = false === has_next_page;
                    }
                    page = tmp12;
                    if (tmp12) {
                      assets(tmp10[3]).batchUpdates(() => closure_4.setState({ hasReachedEnd }));
                      const tmp9Result = assets(tmp10[3]);
                    }
                    obj = { page, has_reached_end: tmp12 };
                    lastAssetIndex(page[2]).track(constants.MEDIA_PICKER_INFINITE_SCROLL_PAGED, obj);
                  }
          };
          lastAssetIndex(10645)(obj);
        }
      }
    }
  },
  refreshAssets(batchSize) {
    batchSize = batchSize.batchSize;
    getDeviceMediaPhotosDefault({
      batchSize,
      extensions: batchSize.extensions,
      onFetched(edges) {
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
          let obj = { num_broken_assets: num, num_assets: null, location: "DeviceMedia.applyStateUpdate" };
          let length;
          if (edges != null) {
            const edges1 = edges.edges;
            if (edges1 != null) {
              length = edges1.length;
            }
          }
          obj.num_assets = length;
          obj.track(constants.MEDIA_PICKER_ASSETS_DEBUG, obj);
        }
        batchSize(1249).batchUpdates(() => {
          const obj = { assets, page: 0, lastAssetIndex: batchSize, endCursor: null, hasReachedEnd: null };
          let end_cursor;
          if (assets != null) {
            const page_info = tmp2.page_info;
            if (page_info != null) {
              end_cursor = page_info.end_cursor;
            }
          }
          obj.endCursor = end_cursor;
          let num;
          if (assets != null) {
            const page_info2 = tmp2.page_info;
            if (page_info2 != null) {
              num = page_info2.has_next_page;
            }
          }
          if (num == null) {
            num = 1;
          }
          obj.hasReachedEnd = !num;
          state.setState(obj);
        });
      }
    });
  },
  useAssets() {
    return state((assets) => assets.assets);
  },
  useHasReachedEnd() {
    return state((hasReachedEnd) => hasReachedEnd.hasReachedEnd);
  }
};