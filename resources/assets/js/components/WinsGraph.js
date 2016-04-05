import Graph from './Graph';

export default Graph.extend({
    props: ['player', 'opponent'],

    ready() {
        this.render({
            labels: ['Wins'],

            // We could also do labels of
            // ['Jeffrey', 'Taylor'], and
            // then use one dataset object.

            datasets: [
                {
                    label: this.player.name,
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [this.player.wins]
                },

                {
                    label: this.opponent.name,
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: [this.opponent.wins]
                }
            ]
        });
    }
});
