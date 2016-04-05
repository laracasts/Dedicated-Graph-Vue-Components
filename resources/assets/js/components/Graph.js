import Vue from 'vue';
import Chart from 'chart.js';

export default Vue.extend({
    template: `
        <div>
            <canvas width="800" height="600" v-el:canvas></canvas>
            {{{ legend }}} 
        </div>
    `,

    data() {
        return {
            legend: ''
        };
    },

    methods: {
        render(data) {
            const chart = new Chart(
                this.$els.canvas.getContext('2d')
            ).Bar(data);

            this.legend = chart.generateLegend();
        }
    }
});
