export default {
  state: {
    vblMultiTabDialogInL2Visibility: false, // TODO: as per GLOSSARY it should be L2
    arTabs: [], // Template has a for loop running on this. TODO: This should be called arTabs
    vsActiveTabName: '', // TODO: Why is there a name outside. In the array each tab has a name
  },
  mutations: {
    mtfSetTabDialogVisibility(state, value) {
      state.vblMultiTabDialogInL2Visibility = value
    },
    mtfAddAdditionalTab(state, newTab) {
      const { name } = newTab
      const checkArray = state.arTabs.filter((tab) => {
        // AG: Why not use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        return tab.name === name
      })
      if (checkArray.length === 0) {
        state.arTabs.push(newTab)
      }
      state.vsActiveTabName = name
    },
    mtfSetVsTabName(state, value) {
      state.vsActiveTabName = value
    },
    mtfSetArTabs(state, value) {
      state.arTabs = value
    },
    mtfShowNewTabInL2(state, pTab) {
      state.arTabs = [pTab]
      state.vblMultiTabDialogInL2Visibility = true
      state.vsActiveTabName = pTab.name

      console.log('state-> ', state)
    },
  },
}