// Mock数据 - 从CSV处理后提取的统计数据
const mockData = {
    totalJobs: 295,
    avgSalary: 14850,
    companyCount: 280,
    avgExperience: 2.6,
    
    salaryDistribution: [
        { range: '3k以下', count: 5 },
        { range: '3k-5k', count: 12 },
        { range: '5k-8k', count: 38 },
        { range: '8k-10k', count: 45 },
        { range: '10k-12k', count: 52 },
        { range: '12k-15k', count: 68 },
        { range: '15k-20k', count: 45 },
        { range: '20k-30k', count: 22 },
        { range: '30k以上', count: 8 }
    ],
    
    educationDistribution: [
        { name: '大专', value: 89 },
        { name: '本科', value: 205 },
        { name: '硕士', value: 1 },
        { name: '中专', value: 1 }
    ],
    
    experienceDistribution: [
        { name: '无需经验', count: 16 },
        { name: '1年经验', count: 68 },
        { name: '2年经验', count: 76 },
        { name: '3-4年经验', count: 107 },
        { name: '5-7年经验', count: 26 },
        { name: '8-9年经验', count: 2 }
    ],
    
    companyTypeDistribution: [
        { name: '民营公司', value: 205 },
        { name: '上市公司', value: 26 },
        { name: '合资', value: 19 },
        { name: '外资（欧美）', value: 13 },
        { name: '外资（非欧美）', value: 12 },
        { name: '国企', value: 11 },
        { name: '创业公司', value: 7 },
        { name: '事业单位', value: 2 }
    ],
    
    companySizeDistribution: [
        { name: '少于50人', value: 36 },
        { name: '50-150人', value: 93 },
        { name: '150-500人', value: 68 },
        { name: '500-1000人', value: 39 },
        { name: '1000-5000人', value: 38 },
        { name: '5000-10000人', value: 8 },
        { name: '10000人以上', value: 13 }
    ],
    
    industryDistribution: [
        { name: '计算机软件', value: 85 },
        { name: '互联网/电子商务', value: 62 },
        { name: '通信/电信', value: 45 },
        { name: '金融', value: 38 },
        { name: '教育培训', value: 25 },
        { name: '电子技术', value: 20 },
        { name: '其他', value: 20 }
    ],
    
    educationSalary: [
        { education: '中专', avgSalary: 8500, count: 1 },
        { education: '大专', avgSalary: 12500, count: 89 },
        { education: '本科', avgSalary: 15200, count: 205 },
        { education: '硕士', avgSalary: 22000, count: 1 }
    ],
    
    experienceSalary: [
        { experience: '无需经验', avgSalary: 9500 },
        { experience: '1年', avgSalary: 11500 },
        { experience: '2年', avgSalary: 13500 },
        { experience: '3-4年', avgSalary: 16000 },
        { experience: '5-7年', avgSalary: 22000 },
        { experience: '8-9年', avgSalary: 28000 }
    ],
    
    // 模型性能数据
    modelPerformance: [
        { name: '线性回归', rmse: 4326.5, r2: 0.2931 },
        { name: '岭回归', rmse: 4327.15, r2: 0.2929 },
        { name: 'Lasso回归', rmse: 4326.48, r2: 0.2931 },
        { name: '随机森林', rmse: 4878.63, r2: 0.1012 },
        { name: '支持向量机', rmse: 4884.56, r2: 0.0990 },
        { name: 'K近邻', rmse: 4893.39, r2: 0.0958 },
        { name: '梯度提升', rmse: 5329.39, r2: -0.0725 },
        { name: '决策树', rmse: 5616.18, r2: -0.1911 }
    ],
    
    // 特征重要性
    featureImportance: [
        { name: '工作经验_年', importance: 0.5324 },
        { name: '公司规模', importance: 0.2315 },
        { name: '公司性质', importance: 0.1691 },
        { name: '学历', importance: 0.0669 }
    ],
    
    // 薪资预测数据
    salaryPrediction: [
        { education: '中专', experience: 0, salary: 14119, companySize: '中等' },
        { education: '中专', experience: 2, salary: 11716, companySize: '中等' },
        { education: '中专', experience: 5, salary: 21200, companySize: '中等' },
        { education: '中专', experience: 10, salary: 21092, companySize: '中等' },
        { education: '大专', experience: 0, salary: 14119, companySize: '中等' },
        { education: '大专', experience: 2, salary: 11716, companySize: '中等' },
        { education: '大专', experience: 5, salary: 21200, companySize: '中等' },
        { education: '大专', experience: 10, salary: 21092, companySize: '中等' },
        { education: '本科', experience: 0, salary: 14119, companySize: '中等' },
        { education: '本科', experience: 2, salary: 13725, companySize: '中等' },
        { education: '本科', experience: 5, salary: 22064, companySize: '大型' },
        { education: '本科', experience: 10, salary: 21914, companySize: '大型' },
        { education: '硕士', experience: 0, salary: 17872, companySize: '大型' },
        { education: '硕士', experience: 2, salary: 17361, companySize: '大型' },
        { education: '硕士', experience: 5, salary: 24876, companySize: '大型' },
        { education: '硕士', experience: 10, salary: 23790, companySize: '大型' }
    ]
};

// 更新时间
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeStr;
}

// 初始化统计数据
function initStats() {
    document.getElementById('totalJobs').textContent = mockData.totalJobs;
    document.getElementById('avgSalary').textContent = mockData.avgSalary.toLocaleString();
    document.getElementById('companyCount').textContent = mockData.companyCount;
    document.getElementById('avgExperience').textContent = mockData.avgExperience;
}

// 薪资分布图表
function initSalaryChart() {
    const chart = echarts.init(document.getElementById('salaryChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: (params) => {
                const data = params[0];
                return `<strong>${data.name}</strong><br/>岗位数: ${data.value}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: mockData.salaryDistribution.map(d => d.range),
            axisLabel: { color: '#8892b0', rotate: 30, fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#8892b0', fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [{
            name: '岗位数',
            type: 'bar',
            data: mockData.salaryDistribution.map(d => d.count),
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#00d4ff' },
                    { offset: 1, color: '#7b2cbf' }
                ]),
                borderRadius: [4, 4, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#7b2cbf' },
                        { offset: 1, color: '#00d4ff' }
                    ])
                }
            },
            barWidth: '60%'
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 学历分布图表
function initEducationChart() {
    const chart = echarts.init(document.getElementById('educationChart'));
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: '5%',
            top: 'center',
            textStyle: { color: '#8892b0', fontSize: 11 }
        },
        series: [{
            name: '学历分布',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 2
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#fff'
                }
            },
            labelLine: {
                show: false
            },
            data: mockData.educationDistribution.map((d, i) => ({
                ...d,
                itemStyle: { color: ['#00d4ff', '#7b2cbf', '#ff6b6b', '#4ecdc4'][i] }
            }))
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 工作经验分布图表
function initExperienceChart() {
    const chart = echarts.init(document.getElementById('experienceChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: (params) => {
                const data = params[0];
                return `<strong>${data.name}</strong><br/>岗位数: ${data.value}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: { color: '#8892b0', fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        yAxis: {
            type: 'category',
            data: mockData.experienceDistribution.map(d => d.name),
            axisLabel: { color: '#8892b0', fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [{
            name: '岗位数',
            type: 'bar',
            data: mockData.experienceDistribution.map(d => d.count),
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#7b2cbf' },
                    { offset: 1, color: '#00d4ff' }
                ]),
                borderRadius: [0, 4, 4, 0]
            },
            barWidth: '60%'
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 公司性质分布图表
function initCompanyTypeChart() {
    const chart = echarts.init(document.getElementById('companyTypeChart'));
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        series: [{
            name: '公司性质',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            label: {
                show: true,
                color: '#8892b0',
                fontSize: 9
            },
            labelLine: {
                lineStyle: { color: 'rgba(255,255,255,0.3)' }
            },
            itemStyle: {
                borderRadius: 8,
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 2
            },
            data: mockData.companyTypeDistribution.map((d, i) => ({
                ...d,
                itemStyle: { 
                    color: [
                        '#00d4ff', '#7b2cbf', '#ff6b6b', '#4ecdc4',
                        '#ffe66d', '#95e1d3', '#f38181', '#aa96da'
                    ][i] 
                }
            }))
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 公司规模分布图表
function initCompanySizeChart() {
    const chart = echarts.init(document.getElementById('companySizeChart'));
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        series: [{
            name: '公司规模',
            type: 'pie',
            radius: ['35%', '65%'],
            center: ['50%', '50%'],
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 11,
                    fontWeight: 'bold',
                    color: '#fff'
                }
            },
            labelLine: {
                show: false
            },
            data: mockData.companySizeDistribution.map((d, i) => ({
                ...d,
                itemStyle: { 
                    color: [
                        '#4ecdc4', '#45b7d1', '#96ceb4', 
                        '#ffeaa7', '#ffd93d', '#ff9ff3', '#f368e0'
                    ][i] 
                }
            }))
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 行业分布图表
function initIndustryChart() {
    const chart = echarts.init(document.getElementById('industryChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: (params) => {
                const data = params[0];
                return `<strong>${data.name}</strong><br/>岗位数: ${data.value}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: mockData.industryDistribution.map(d => d.name),
            axisLabel: { color: '#8892b0', rotate: 30, fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#8892b0', fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [{
            name: '岗位数',
            type: 'bar',
            data: mockData.industryDistribution.map(d => d.value),
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#ff6b6b' },
                    { offset: 1, color: '#feca57' }
                ]),
                borderRadius: [4, 4, 0, 0]
            },
            barWidth: '50%'
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 学历与薪资关系图表
function initEduSalaryChart() {
    const chart = echarts.init(document.getElementById('eduSalaryChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross', crossStyle: { color: '#999' } },
            formatter: (params) => {
                let result = `<strong>${params[0].name}</strong><br/>`;
                params.forEach(p => {
                    result += `${p.seriesName}: ${p.seriesName === '平均薪资' ? '¥' + p.value.toLocaleString() : p.value}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: ['平均薪资', '岗位数'],
            textStyle: { color: '#8892b0', fontSize: 11 }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: mockData.educationSalary.map(d => d.education),
                axisPointer: { type: 'shadow' },
                axisLabel: { color: '#8892b0', fontSize: 12 },
                axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '薪资(元)',
                min: 0,
                max: 25000,
                interval: 5000,
                axisLabel: {
                    color: '#8892b0',
                    formatter: '{value}',
                    fontSize: 11
                },
                axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
                splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            },
            {
                type: 'value',
                name: '岗位数',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    color: '#8892b0',
                    formatter: '{value}',
                    fontSize: 11
                },
                axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
                splitLine: { show: false }
            }
        ],
        series: [
            {
                name: '平均薪资',
                type: 'bar',
                data: mockData.educationSalary.map(d => d.avgSalary),
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#00d4ff' },
                        { offset: 1, color: '#7b2cbf' }
                    ]),
                    borderRadius: [4, 4, 0, 0]
                }
            },
            {
                name: '岗位数',
                type: 'line',
                yAxisIndex: 1,
                data: mockData.educationSalary.map(d => d.count),
                smooth: true,
                lineStyle: { color: '#ff6b6b', width: 3 },
                itemStyle: { color: '#ff6b6b' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(255,107,107,0.3)' },
                        { offset: 1, color: 'rgba(255,107,107,0.05)' }
                    ])
                }
            }
        ]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 工作经验与薪资趋势图表
function initExpSalaryChart() {
    const chart = echarts.init(document.getElementById('expSalaryChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                return `<strong>${params[0].name}</strong><br/>平均薪资: ¥${params[0].value.toLocaleString()}元/月`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: mockData.experienceSalary.map(d => d.experience),
            axisLabel: { color: '#8892b0', fontSize: 12 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#8892b0',
                formatter: (value) => `¥${(value/1000).toFixed(1)}k`,
                fontSize: 11
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [{
            name: '薪资',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 12,
            data: mockData.experienceSalary.map(d => d.avgSalary),
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#00d4ff' },
                    { offset: 1, color: '#7b2cbf' }
                ]),
                width: 4
            },
            itemStyle: {
                color: '#7b2cbf',
                borderColor: '#fff',
                borderWidth: 3
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(123,44,191,0.3)' },
                    { offset: 1, color: 'rgba(0,212,255,0.05)' }
                ])
            }
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 模型性能对比图表
function initModelPerformanceChart() {
    const chart = echarts.init(document.getElementById('modelPerformanceChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross', crossStyle: { color: '#999' } },
            formatter: (params) => {
                let result = `<strong>${params[0].name}</strong><br/>`;
                params.forEach(p => {
                    result += `${p.seriesName}: ${p.seriesName === 'R2' ? p.value.toFixed(4) : p.value.toFixed(1)}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: ['R2', 'RMSE'],
            textStyle: { color: '#8892b0', fontSize: 11 }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: mockData.modelPerformance.map(d => d.name),
                axisPointer: { type: 'shadow' },
                axisLabel: { color: '#8892b0', rotate: 30, fontSize: 11 },
                axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'R2分数',
                min: -0.3,
                max: 0.4,
                axisLabel: {
                    color: '#4ecdc4',
                    fontSize: 11
                },
                axisLine: { lineStyle: { color: '#4ecdc4' } },
                splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            },
            {
                type: 'value',
                name: 'RMSE',
                min: 4000,
                max: 6000,
                axisLabel: {
                    color: '#ff6b6b',
                    fontSize: 11
                },
                axisLine: { lineStyle: { color: '#ff6b6b' } },
                splitLine: { show: false }
            }
        ],
        series: [
            {
                name: 'R2',
                type: 'bar',
                data: mockData.modelPerformance.map(d => d.r2),
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#4ecdc4' },
                        { offset: 1, color: '#45b7d1' }
                    ]),
                    borderRadius: [4, 4, 0, 0]
                }
            },
            {
                name: 'RMSE',
                type: 'line',
                yAxisIndex: 1,
                data: mockData.modelPerformance.map(d => d.rmse),
                smooth: true,
                lineStyle: { color: '#ff6b6b', width: 3 },
                itemStyle: { color: '#ff6b6b' },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(255,107,107,0.2)' },
                        { offset: 1, color: 'rgba(255,107,107,0.05)' }
                    ])
                }
            }
        ]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 特征重要性图表
function initFeatureImportanceChart() {
    const chart = echarts.init(document.getElementById('featureImportanceChart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: (params) => {
                const data = params[0];
                return `<strong>${data.name}</strong><br/>重要性: ${(data.value * 100).toFixed(1)}%`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: 0.6,
            axisLabel: { 
                color: '#8892b0', 
                fontSize: 11,
                formatter: (value) => `${(value * 100).toFixed(0)}%`
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        yAxis: {
            type: 'category',
            data: mockData.featureImportance.map(d => d.name),
            axisLabel: { color: '#8892b0', fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [{
            name: '重要性',
            type: 'bar',
            data: mockData.featureImportance.map(d => d.importance),
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#ffe66d' },
                    { offset: 1, color: '#feca57' }
                ]),
                borderRadius: [0, 4, 4, 0]
            },
            barWidth: '50%'
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 薪资预测趋势图表
function initSalaryPredictionChart() {
    const chart = echarts.init(document.getElementById('salaryPredictionChart'));
    
    const eduGroups = ['中专', '大专', '本科', '硕士'];
    const colors = ['#00d4ff', '#7b2cbf', '#ff6b6b', '#4ecdc4'];
    
    const series = eduGroups.map((edu, index) => {
        const eduData = mockData.salaryPrediction.filter(d => d.education === edu);
        return {
            name: edu,
            type: 'line',
            data: eduData.map(d => d.salary),
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: { color: colors[index], width: 2 },
            itemStyle: { color: colors[index], borderColor: '#fff', borderWidth: 2 }
        };
    });
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                let result = `<strong>经验: ${params[0].name}年</strong><br/>`;
                params.forEach(p => {
                    result += `${p.seriesName}: ¥${p.value.toLocaleString()}<br/>`;
                });
                return result;
            }
        },
        legend: {
            data: eduGroups,
            textStyle: { color: '#8892b0', fontSize: 10 },
            top: 'bottom'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [0, 2, 5, 10],
            axisLabel: { color: '#8892b0', fontSize: 11 },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#8892b0',
                formatter: (value) => `¥${(value/1000).toFixed(0)}k`,
                fontSize: 11
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: series
    };
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}

// 页面加载完成后初始化所有内容
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
    
    initStats();
    initSalaryChart();
    initEducationChart();
    initExperienceChart();
    initCompanyTypeChart();
    initCompanySizeChart();
    initIndustryChart();
    initEduSalaryChart();
    initExpSalaryChart();
    initModelPerformanceChart();
    initFeatureImportanceChart();
    initSalaryPredictionChart();
});
