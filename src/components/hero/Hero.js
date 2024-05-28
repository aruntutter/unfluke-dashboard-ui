import React from "react";
import "./Hero.css";
import { AiOutlineStock } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="leader-board">
      <h1>LeaderBoards</h1>
      <main class="table" id="customers_table">
        <section className="table__header">
          <h2>Basic Backtest</h2>
          <div className="slip-page">
            <span>Slippage</span>
            <span>
              <select>
                <option className="option" value="0">
                  0%
                </option>
                <option className="option" value="0.5">
                  0.5%
                </option>
                <option className="option" value="1.0">
                  1.0%
                </option>
              </select>
            </span>
          </div>
        </section>
        <section class="table__body">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win % Day</th>
                <th>Price Rs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>500</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>8</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>9</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td>Name</td>
                <td>
                  <AiOutlineStock /> 3.96
                </td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Hero;
