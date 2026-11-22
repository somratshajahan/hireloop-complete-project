'use client'
import React, { useState } from 'react';
import { FiPlus, FiArrowRight, FiZap } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import { HiChartBar } from 'react-icons/hi';;


const plans = [
  {
    id: 'starter',
    name: 'Starter',
    icon: FaCrown,
    iconColor: 'text-[#D8B4FE]',
    monthlyPrice: 0,
    yearlyPrice: 0,
    subtitle: 'Start building your insights hub:',
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    icon: HiChartBar,
    iconColor: 'text-[#D8B4FE]',
    monthlyPrice: 17,
    yearlyPrice: 13, // ~25% off
    subtitle: 'Start building your insights hub:',
    features: [
      'Daily AI match brief (top 5)',
      'Verified salary bands',
      'Company insight dashboards',
      '1-click apply, unlimited',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: FiZap,
    iconColor: 'text-[#D8B4FE]',
    monthlyPrice: 99,
    yearlyPrice: 74, // ~25% off
    subtitle: 'Start building your insights hub:',
    features: [
      'Everything in Pro',
      'Multi-profile career portfolios',
      'Shared talent rooms',
      'Recruiter view (read-only)',
    ],
    highlighted: false,
  },
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    return (
       <section className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Label & Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-gray-300 mb-4">
            <span className="w-1.5 h-1.5 bg-[#6366F1] inline-block" />
            <span>PRICING</span>
            <span className="w-1.5 h-1.5 bg-[#6366F1] inline-block" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight text-white">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Billing Toggle (Monthly / Yearly 25%) */}
          <div className="mt-8 inline-flex items-center bg-[#141416] border border-white/10 rounded-full p-1">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#C026D3] text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price =
              billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#17171b] to-[#0d0d10] border border-white/15 shadow-[0_0_50px_rgba(255,255,255,0.06)]'
                    : 'bg-[#09090b] border border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Card Header: Icon + Name + Price */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#16161a] border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className={`w-4 h-4 ${plan.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-semibold text-white">
                        ${price}
                      </span>
                      <span className="text-xs text-gray-400">/month</span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="mt-7 text-xs sm:text-sm text-gray-300">
                    {plan.subtitle}
                  </p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-300"
                      >
                        <span className="w-5 h-5 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                          <FiPlus className="w-3.5 h-3.5 text-gray-300" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  className={`mt-8 w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    plan.highlighted
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-[#141417] text-white border border-white/10 hover:bg-[#1e1e24]'
                  }`}
                >
                  <span>Choose This Plan</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
};

export default Pricing;