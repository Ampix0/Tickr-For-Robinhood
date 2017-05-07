<template>
    <div id="wrapper">
        <section class="sidebar">
            <ul class="watchListContainer">
                <watchListItem v-for="item in watchList" :fundementals="item.instrument" :authKey="authKey"></watchListItem>
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
    import watchListItem from './HomePageView/watchListItem'
    export default {
        name: 'home-page',
        components: {
            watchListItem
        },
        data: function() {
            return {
                watchList: [],
            }
        },
        computed: {
            authKey: function() {
                return 'Token ' + this.$route.params.authKey;
            }
        },
        methods: {

            getWatchList: function() {
                this.axios.get('https://api.robinhood.com/watchlists/Default/', {
                        'headers': {
                            'Authorization': this.authKey
                        }
                    })
                    .then((response) => {
                        console.log(response.data.results);
                        this.watchList = response.data.results;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

        },

        mounted: function() {
            this.getWatchList();
        }
    }

</script>
