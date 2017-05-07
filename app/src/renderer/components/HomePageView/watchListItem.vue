<template>
    
    <li class="watchListItem">
                    <div class="watchListItemSymbol">{{fundementals}}</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
    
</template>

<script>
    export default {
        props: ['fundementals', 'authKey'],
        methods: {
            update: function() {
                console.log('update');
                this.axios.get(this.quoteURL, {
                        'headers': {
                            'Authorization': this.authKey
                        }
                    })
                    .then((response) => {
                        this.currentPrice = response.last_trade_price;
                        this.previousClose = response.previous_close;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        data: function() {
            return {
                symbol: '',
                name: '',
                quoteURL: '',
                currentPrice: '',
                previousClose: '',

            }
        },
        mounted: function() {
            this.axios.get(this.fundementals, {
                    'headers': {
                        'Authorization': this.authKey
                    }
                })
                .then((response) => {
                    this.symbol = response.symbol;
                    this.name = response.name;
                    this.quoteURL = response.quote;
                    this.update();
                })
                .catch((error) => {
                    console.log(error);
                });
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
