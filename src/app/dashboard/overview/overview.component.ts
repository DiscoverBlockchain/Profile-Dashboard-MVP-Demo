import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';

declare const $: any;

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html'
})

export class OverviewComponent implements OnInit, AfterViewInit {
    initCirclePercentage() {
        $('#chartDashboard, #chartOrders, #chartNewVisitors, #chartSubscriptions, #chartDashboardDoc, #chartOrdersDoc').easyPieChart({
            lineWidth: 6,
            size: 160,
            scaleColor: false,
            trackColor: 'rgba(255,255,255,.25)',
            barColor: '#FFFFFF',
            animate: ({duration: 5000, enabled: true})
        });
    }

    ngOnInit() {
        /*  **************** Chart Total Earnings - single line ******************** */
        const dataPrice = {
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            series: [
                [230, 340, 400, 300, 570, 500, 800]
            ]
        };

        const optionsPrice = {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            // high: 'auto',
            //   classNames: {
            //       line: 'ct-line ct-green'
            //   }
        };

        const chartTotalEarnings = new Chartist.Line('#chartTotalEarnings', dataPrice, optionsPrice);

        /*  **************** Chart Subscriptions - single line ******************** */

        const dataDays = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [60, 50, 30, 50, 70, 60, 90, 100]
            ]
        };

        const optionsDays: any = {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-red'
            }
        };

        const chartTotalSubscriptions = new Chartist.Line('#chartTotalSubscriptions', dataDays, optionsDays);

        /*  **************** Chart Total Downloads - single line ******************** */

        const dataDownloads = {
            labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
            series: [
                [1200, 1000, 3490, 8345, 3256, 2566]
            ]
        };

        const optionsDownloads: any = {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
                showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
                line: 'ct-line ct-orange'
            }
        };

        const chartTotalDownloads = new Chartist.Line('#chartTotalDownloads', dataDownloads, optionsDownloads);
    }

    ngAfterViewInit() {
        this.initCirclePercentage();
    }
}
