<template>
    
    <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
    
</template>

<script>
    export default {
        props: ['fundementals'],
        methods: {
            mounted: function() {
                console.log(this.fundementals);
            }
        }
    }

</script>

<style lang='scss'>
    @import "~global/global.scss";
    .watchListItem {
        @include element;
        padding: 2em;
        display: flex;
        background-color: $colorTextWhite;
        justify-content: space-between;
        align-content: center;
        text-align: center;
        div {
            display: flex;
            align-items: center;
            text-align: center;
        }
        .watchListItemSymbol {
            flex: 1;
        }
        .watchListItemPrice {
            flex: 2;
        }
    }

</style>
