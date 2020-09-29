<template>
<div>
    <my-header></my-header>
    <div class="row">
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="key" v-for="(cart, key) in sortCarts">
                    <th scope="row">{{ cart.id }}</th>
                    <td>{{ cart.title }}</td>
                    <td>{{ cart.price }}</td>
                    <td><button class="btn btn-outline-danger" v-on:click="deleted(key)">X</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-info">
                <div class="panel-heading">Pet Depot Checkout</div>
                <div class="panel-body">
                    <div class="form-group">
                        <div class="col-md-12">
                            <h4><strong>Enter Your Information</strong></h4>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6">
                            <strong>First Name:</strong>
                            <input v-model.trim="order.firstName" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <strong>Last Name:</strong>
                            <input v-model.trim="order.lastName" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-12"><strong>Address:</strong></div>
                        <div class="col-md-12">
                            <input v-model.trim="order.address" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-12"><strong>City:</strong></div>
                        <div class="col-md-12">
                            <input v-model.trim="order.city" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-2">
                            <strong>State:</strong>
                            <select v-model="order.state" class="form-control">
                                <option disabled value="">State</option>
                                <option v-for="(state, key) in states" v-bind:key="key" v-bind:value="state">
                                    {{ key }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-4">
                            <strong>Zip / Postal Code:</strong>
                            <input v-model.number="order.zip" class="form-control" type="number" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 boxes">
                            <input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift" v-bind:false-value="order.dontSendGift" v-model="order.gift" />
                            <label for="gift">Ship As Gift?</label>
                        </div>
                    </div>
                    <!-- end of form-group -->
                    <div class="form-group">
                        <div class="col-md-6 boxes">
                            <input type="radio" id="home" v-bind:value="order.home" v-model="order.method" />
                            <label for="home">Home</label>
                            <input type="radio" id="business" v-bind:value="order.business" v-model="order.method" />
                            <label for="business">Business</label>
                        </div>
                    </div>
                    <!-- end of form-group-->
                    <div class="form-group">
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">
                                Place Order
                            </button>
                        </div>
                        <!-- end of col-md-6-->
                    </div>
                    <!-- end of form-group-->
                    <div class="col-md-12 verify">
                        <pre>
                        First Name: {{ order.firstName }}
                        Last Name: {{ order.lastName }}
                        Address: {{ order.address }}
                        City: {{ order.city }}
                        Zip: {{ order.zip }}
                        State: {{ order.state }}
                        Method: {{ order.method }}
                        Gift: {{ order.gift }}
              </pre>
                    </div>
                    <!-- end of col-md-12 verify-->
                </div>
                <!--end of panel-body-->
            </div>
            <!--end of panel panel-info-->
        </div>
        <!--end of col-md-10 col-md-offset-1-->
    </div>
    <!--end of row-->
</div>
</template>

<script>
import MyHeader from "./Header.vue";
import {
    mapGetters
} from "vuex";
export default {
    name: "Form",
    data() {
        return {
            states: {
                AL: "Alabama",
                AK: "Alaska",
                AR: "Arizona",
                CA: "California",
                NV: "Nevada",
            },
            order: {
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                zip: "",
                state: "",
                method: "Home Address",
                business: "Business Address",
                home: "Home Address",
                gift: "",
                sendGift: "Send As A Gift",
                dontSendGift: "Do Not Send As A Gift",
            },
        };
    },
    components: {
        MyHeader,
    },
    computed: {
        ...mapGetters(["cart"]),
        sortCarts() {
            if (this.cart.length > 0) {
                return this.cart;
            }
        },
    },
    methods: {
        deleted(key) {
            this.$store.commit('DELL_CART', key)
        },
        submitForm() {
            this.order.firstName = "";
            this.order.lastName = "";
            this.order.address = "";
            this.order.city = "";
            this.order.zip = "";
            this.order.gift = "";
            this.order.state = "";
            this.order.method = "Home Address";
            alert("Submitted");
        },
    },
};
</script>

<style scoped>
</style>
