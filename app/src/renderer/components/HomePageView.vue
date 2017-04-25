<template>
    <div id="wrapper">
        <section class="sidebar">
            <ul class="watchListContainer">
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>
                
                <li class="watchListItem">
                    <div class="watchListItemSymbol">MSFT</div>
                    <div class="watchListItemPrice"> $61 </div>
                    <div class="watchListItemDelta"> 2% </div>
                </li>

            </ul>
        </section>
        <main class="dashboard">
            <section class="searchContainer">
                <input class="searchBox" type="text">
                <button class="searchButton">Search</button>
            </section>
            <section class="portfolio">
                <h1>portfolio</h1>
            </section>
        </main>
    </div>
</template>


<style lang="scss">
    @import "~global/global.scss";
    #wrapper {
        display: flex;
        flex: 1;
        flex-direction: row;
    }
    
    .sidebar {
        min-width: 30%;
        display: flex;
        flex-direction: column;
        .watchListContainer {
            color: $colorTextBlack;
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow-y: scroll;
            direction: rtl;
            * {
                direction: ltr;
            }
        }
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
    }
    
    .dashboard {
        width: 100%;
        .searchContainer {
            display: flex;
            height: 4em;
            margin: 0.5em;
            .searchBox {
                flex: 1;
            }
        }
        .portfolio {
            flex: 1;
        }
    }

</style>


<script>
    export default {
        name: 'home-page',

        mounted: function() {

            //Fetch watchlist
            this.axios.post('https://api.robinhood.com/watchlists/Default/', {
                    Authorization: "Token " + this.$router.params.authKey

                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                })


        }
    }

</script>
