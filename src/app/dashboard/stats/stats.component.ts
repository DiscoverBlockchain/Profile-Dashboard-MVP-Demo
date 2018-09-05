import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';

declare var $: any;

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit, AfterViewInit {
    ngOnInit() {
        const mapData = {
            'AU': 760,
            'BR': 550,
            'CA': 120,
            'DE': 1300,
            'FR': 540,
            'GB': 690,
            'GE': 200,
            'IN': 200,
            'RO': 600,
            'RU': 300,
            'US': 2920,
        };
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    'fill-opacity': 0.9,
                    stroke: 'none',
                    'stroke-width': 0,
                    'stroke-opacity': 0
                }
            },

            series: {
                regions: [{
                    values: mapData,
                    scale: ['#AAAAAA', '#444444'],
                    normalizeFunction: 'polynomial'
                }]
            },
        });
    }

    ngAfterViewInit() {
        const dataSales: any = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };

        const optionsSales: any = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            showLine: true,
            showPoint: false,
        };

        const responsiveSales: any[] = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[1];
                    }
                }
            }]
        ];

        const chartHours = new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        const data: any = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };

        const options: any = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };

        const responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        const chartActivity = new Chartist.Line('#chartActivity', data, options, responsiveOptions);
    }
}
