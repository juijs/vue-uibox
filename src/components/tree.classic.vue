<template src="./html/tree.html"></template>

<script>
    import UixTree from "./js/tree";
    import methods from "../base/methods";

    UixTree.mixins = [ methods ];
    export default UixTree;
</script>

<style scoped lang="less">
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/common.less";
    @import "~juijs-ui/src/styles/common.theme.less";
    @import "~juijs-ui/src/styles/icon.less";
    @import "~juijs-ui/src/styles/icon.theme.less";
    @import "~juijs-ui/src/styles/tree.less";
    @import "~juijs-ui/src/styles/tree.theme.less";
    @import "~juijs-ui/src/styles/theme/classic.less";
</style>