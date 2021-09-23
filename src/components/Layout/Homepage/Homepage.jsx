import React from 'react';

import millify from "millify";
import {Typography, Row, Col, Statistic} from "antd";
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from "../../../api/cryptoApi";
import {News, Cryptocurrencies} from "../../index";

const {Title} = Typography;


const Homepage = () => {

    const {data, isFetching} = useGetCryptosQuery();
    //  (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
    const globalStats = data?.data?.stats;
    if (isFetching) return 'Loading...'
    // Extract necessity data from stats object
    const {total, totalExchanges, totalMarketCap, total24hVolume, totalMarkets} = globalStats;
    console.log(data);
    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={totalExchanges}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto news</Title>
                <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <News/>
        </>
    );
};

export default Homepage;