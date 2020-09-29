const state = {
    products: {},
    cart: []
};

const getters = {
    products: state => state.products,
    cart: state => state.cart,
};

const actions = {
    initStore: ({commit}) => {
        axios.get('/static/products.json')
        .then((response) => {
            console.log(response.data.products);
            commit('SET_STORE', response.data.products)
        });
    }
};

const mutations = {
    'SET_STORE' (state, products) {
        state.products = products;
    },
    'SET_CART' (state, cart){
        state.cart.push(cart);
    },
    'DELL_CART' (state, key){
        state.cart.splice(key,1);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}