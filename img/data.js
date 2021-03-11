var data = {
    //省
    provinces: [
      {
        name: 'guangdong',
        title: '广东省'
      },
      {
        name: 'shandong',
        title: '山东省'
      },
      {
        name: 'zhejiang',
        title: '浙江省'
      },
      {
        name: 'fujian',
        title: '福建省'
      }
    ],
  
    //市
    cities: {
      guangdong: [
        {
          name: 'guangzhou',
          title: '广州市'
        },
        {
          name: 'shenzhen',
          title: '深圳市'
        },
        {
          name: 'zhanjiang',
          title: '湛江市'
        },
        {
          name: 'maoming',
          title: '茂名市'
        }
      ],
  
      shandong: [
        {
          name: 'jinan',
          title: '济南市'
        },
        {
          name: 'qingdao',
          title: '青岛市'
        },
        {
          name: 'zaozhuang',
          title: '枣庄市'
        },
        {
          name: 'yantai',
          title: '烟台市'
        },
        {
          name: 'jining',
          title: '济宁市'
        },
        {
          name: 'dezhou',
          title: '德州市'
        }
      ],
  
      zhejiang: [
        {
          name: 'hangzhou',
          title: '杭州市'
        },
        {
          name: 'jiaxing',
          title: '嘉兴市'
        },
        {
          name: 'huzhou',
          title: '湖州市'
        },
        {
          name: 'ningbo',
          title: '宁波市'
        }
      ],
  
      fujian: [
        {
          name: 'xiamen',
          title: '厦门市'
        },
        {
          name: 'quanzhou',
          title: '泉州市'
        },
        {
          name: 'fuzhou',
          title: '福州市'
        }
      ]
  
    },
  
    //区、镇
    areas: {
  
      guangzhou: [
        {
          name: 'tianhe',
          title: '天河区'
        },
        {
          name: 'yuexiu',
          title: '越秀区'
        },
        {
          name: 'liwan',
          title: '荔湾区'
        }
      ],
  
      shenzhen: [
        {
          name: 'luohu',
          title: '罗湖区'
        },
        {
          name: 'baoan',
          title: '宝安区'
        },
        {
          name: 'nanshan',
          title: '南山区'
        },
        {
          name: 'futian',
          title: '福田区'
        }
      ],
  
      zhanjiang: [
        {
          name: 'chikan',
          title: '赤坎区'
        },
        {
          name: 'xiashan',
          title: '霞山区'
        },
        {
          name: 'potou',
          title: '坡头区'
        },
        {
          name: 'mazhang',
          title: '麻章区'
        }
      ],
  
      maoming: [
        {
          name: 'maonan',
          title: '茂南区'
        },
        {
          name: 'dianbai',
          title: '电白区'
        }
      ],
  
      jinan: [
        {
          name: 'shizhong',
          title: '市中区'
        },
        {
          name: 'lixia',
          title: '历下区'
        },
        {
          name: 'licheng',
          title: '历城区'
        }
      ],
  
      qingdao: [
        {
          name: 'shinan',
          title: '市南区'
        },
        {
          name: 'shibei',
          title: '市北区'
        },
        {
          name: 'chengyang',
          title: '城阳区'
        }
      ],
  
      zaozhuang: [
        {
          name: 'xuecheng',
          title: '薛城区'
        },
        {
          name: 'taierzhuang',
          title: '台儿庄区'
        },
        {
          name: 'shanting',
          title: '山亭区'
        }
      ],
  
      yantai: [
        {
          name: 'fushan',
          title: '福山区'
        },
        {
          name: 'haiyang',
          title: '海阳市'
        },
        {
          name: 'laiyang',
          title: '莱阳市'
        }
      ],
  
      jining: [
        {
          name: 'rencheng',
          title: '任城区'
        },
        {
          name: 'yanzhou',
          title: '兖州区'
        }
      ],
  
      dezhou: [
        {
          name: 'decheng',
          title: '德城区'
        },
        {
          name: 'lingcheng',
          title: '陵城区'
        }
      ],
  
      hangzhou: [
        {
          name: 'xihu',
          title: '西湖区'
        },
        {
          name: 'shangcheng',
          title: '上城区'
        },
        {
          name: 'fuyang',
          title: '富阳区'
        },
        {
          name: 'binjiang',
          title: '滨江区'
        },
        {
          name: 'xiacheng',
          title: '下城区'
        },
        {
          name: 'jianggan',
          title: '江干区'
        }
      ],
  
      jiaxing: [
        {
          name: 'nanhu',
          title: '南湖区'
        },
        {
          name: 'xiuzhou',
          title: '秀洲区'
        }
      ],
  
      huzhou: [
        {
          name: 'wuxing',
          title: '吴兴区'
        },
        {
          name: 'nanxun',
          title: '南浔区'
        }
      ],
  
      ningbo: [
        {
          name: 'haishu',
          title: '海曙区'
        },
        {
          name: 'jiangdong',
          title: '江东区'
        },
        {
          name: 'jiangbei',
          title: '江北区'
        }
      ],
  
      xiamen: [
        {
          name: 'siming',
          title: '思明区'
        },
        {
          name: 'huli',
          title: '湖里区'
        },
        {
          name: 'jimei',
          title: '集美区'
        },
        {
          name: 'haicang',
          title: '海沧区'
        },
        {
          name: 'tongan',
          title: '同安区'
        },
        {
          name: 'xiangan',
          title: '翔安区'
        }
      ],
  
      quanzhou: [
        {
          name: 'licheng',
          title: '鲤城区'
        },
        {
          name: 'fengze',
          title: '丰泽区'
        },
        {
          name: 'luojiang',
          title: '洛江区'
        },
        {
          name: 'quangang',
          title: '泉港区'
        }
      ],
  
      fuzhou: [
        {
          name: 'cangshan',
          title: '仓山区'
        },
        {
          name: 'gulou',
          title: '鼓楼区'
        },
        {
          name: 'mawei',
          title: '马尾区'
        },
        {
          name: 'taijiang',
          title: '台江区'
        },
        {
          name: 'jinan',
          title: '晋安区'
        },
        {
          name: 'changle',
          title: '长乐区'
        }
      ]
  
    } 
  
  };